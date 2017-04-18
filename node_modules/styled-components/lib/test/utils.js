'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expectCSSMatches = exports.resetStyled = undefined;

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _styled2 = require('../constructors/styled');

var _styled3 = _interopRequireDefault(_styled2);

var _StyleSheet = require('../models/StyleSheet');

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _StyledComponent = require('../models/StyledComponent');

var _StyledComponent2 = _interopRequireDefault(_StyledComponent);

var _ComponentStyle2 = require('../models/ComponentStyle');

var _ComponentStyle3 = _interopRequireDefault(_ComponentStyle2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Ignore hashing, just return class names sequentially as .a .b .c etc */
var index = 0;
/**
 * This sets up our end-to-end test suite, which essentially makes sure
 * our public API works the way we promise/want
 */

var classNames = function classNames() {
  return String.fromCodePoint(97 + index++);
};

var resetStyled = exports.resetStyled = function resetStyled() {
  _StyleSheet2.default.flush();
  index = 0;
  return (0, _styled3.default)((0, _StyledComponent2.default)((0, _ComponentStyle3.default)(classNames)));
};

var stripWhitespace = function stripWhitespace(str) {
  return str.trim().replace(/\s+/g, ' ');
};
var expectCSSMatches = exports.expectCSSMatches = function expectCSSMatches(expectation) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _opts$ignoreWhitespac = opts.ignoreWhitespace,
      ignoreWhitespace = _opts$ignoreWhitespac === undefined ? true : _opts$ignoreWhitespac,
      _opts$styleSheet = opts.styleSheet,
      styleSheet = _opts$styleSheet === undefined ? _StyleSheet2.default : _opts$styleSheet;

  var css = styleSheet.rules().map(function (rule) {
    return rule.cssText;
  }).join('\n');
  if (ignoreWhitespace) {
    (0, _expect2.default)(stripWhitespace(css)).toEqual(stripWhitespace(expectation));
  } else {
    (0, _expect2.default)(css).toEqual(expectation);
  }
  return css;
};