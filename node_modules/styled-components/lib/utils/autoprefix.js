'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _camelizeStyleName = require('fbjs/lib/camelizeStyleName');

var _camelizeStyleName2 = _interopRequireDefault(_camelizeStyleName);

var _hyphenateStyleName = require('fbjs/lib/hyphenateStyleName');

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

var _static = require('inline-style-prefixer/static');

var _static2 = _interopRequireDefault(_static);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// eslint-disable-next-line


var babelPluginFlowReactPropTypes_proptype_Container = require('../vendor/postcss/container').babelPluginFlowReactPropTypes_proptype_Container || require('react').PropTypes.any;

exports.default = function (root) {
  root.walkDecls(function (decl) {
    /* No point even checking custom props */
    if (/^--/.test(decl.prop)) return;

    var objStyle = _defineProperty({}, (0, _camelizeStyleName2.default)(decl.prop), decl.value);
    var prefixed = (0, _static2.default)(objStyle);
    Object.keys(prefixed).reverse().forEach(function (newProp) {
      var newVals = prefixed[newProp];
      var newValArray = Array.isArray(newVals) ? newVals : [newVals];
      newValArray.forEach(function (newVal) {
        decl.cloneBefore({
          prop: (0, _hyphenateStyleName2.default)(newProp),
          value: newVal
        });
      });
    });
    decl.remove();
  });
};

module.exports = exports['default'];