'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  from, 11.1%, to {\n     transform: none;\n   }\n\n   22.2% {\n     transform: skewX(-12.5deg) skewY(-12.5deg);\n   }\n\n   33.3% {\n     transform: skewX(6.25deg) skewY(6.25deg);\n   }\n\n   44.4% {\n     transform: skewX(-3.125deg) skewY(-3.125deg);\n   }\n\n   55.5% {\n     transform: skewX(1.5625deg) skewY(1.5625deg);\n   }\n\n   66.6% {\n     transform: skewX(-0.78125deg) skewY(-0.78125deg);\n   }\n\n   77.7% {\n     transform: skewX(0.390625deg) skewY(0.390625deg);\n   }\n\n   88.8% {\n     transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n   }\n'], ['\n  from, 11.1%, to {\n     transform: none;\n   }\n\n   22.2% {\n     transform: skewX(-12.5deg) skewY(-12.5deg);\n   }\n\n   33.3% {\n     transform: skewX(6.25deg) skewY(6.25deg);\n   }\n\n   44.4% {\n     transform: skewX(-3.125deg) skewY(-3.125deg);\n   }\n\n   55.5% {\n     transform: skewX(1.5625deg) skewY(1.5625deg);\n   }\n\n   66.6% {\n     transform: skewX(-0.78125deg) skewY(-0.78125deg);\n   }\n\n   77.7% {\n     transform: skewX(0.390625deg) skewY(0.390625deg);\n   }\n\n   88.8% {\n     transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n   }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  animation-name: ', ';\n  transform-origin: center;\n'], ['\n  animation-name: ', ';\n  transform-origin: center;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _BaseAnimation = require('../BaseAnimation');

var _BaseAnimation2 = _interopRequireDefault(_BaseAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var jelloAnimation = (0, _styledComponents.keyframes)(_templateObject);

var Jello = (0, _styledComponents2.default)(_BaseAnimation2.default)(_templateObject2, jelloAnimation);

exports.default = Jello;