'use strict';

var _templateObject = _taggedTemplateLiteral(['\n      0% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 1;\n      }\n    '], ['\n      0% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 1;\n      }\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['', ''], ['', '']);

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _keyframes2 = require('../keyframes');

var _keyframes3 = _interopRequireDefault(_keyframes2);

var _StyleSheet = require('../../models/StyleSheet');

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _utils = require('../../test/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Setup
 */
var index = 0;
var keyframes = (0, _keyframes3.default)(function () {
  return 'keyframe_' + index++;
});

describe('keyframes', function () {
  beforeEach(function () {
    (0, _utils.resetStyled)();
    index = 0;
  });

  it('should return its name', function () {
    (0, _expect2.default)(keyframes(_templateObject)).toEqual('keyframe_0');
  });

  it('should insert the correct styles', function () {
    var rules = '\n      0% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 1;\n      }\n    ';

    var name = keyframes(_templateObject2, rules);
    (0, _utils.expectCSSMatches)('\n      @keyframes keyframe_0 {\n        0% {\n          opacity: 0;\n        }\n        100% {\n          opacity: 1;\n        }\n      }\n    ', { styleSheet: _StyleSheet2.default });
  });
});