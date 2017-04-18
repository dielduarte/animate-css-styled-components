'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _css = require('./css');

var _css2 = _interopRequireDefault(_css);

var _GlobalStyle = require('../models/GlobalStyle');

var _GlobalStyle2 = _interopRequireDefault(_GlobalStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Interpolation = require('../types').babelPluginFlowReactPropTypes_proptype_Interpolation || require('react').PropTypes.any;

var injectGlobal = function injectGlobal(strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var globalStyle = new _GlobalStyle2.default(_css2.default.apply(undefined, [strings].concat(interpolations)));
  globalStyle.generateAndInject();
};

exports.default = injectGlobal;
module.exports = exports['default'];