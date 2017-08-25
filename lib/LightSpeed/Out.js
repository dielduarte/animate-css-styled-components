'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  from {\n     opacity: 1;\n   }\n\n   to {\n     transform: translate3d(100%, 0, 0) skewX(30deg);\n     opacity: 0;\n   }\n'], ['\n  from {\n     opacity: 1;\n   }\n\n   to {\n     transform: translate3d(100%, 0, 0) skewX(30deg);\n     opacity: 0;\n   }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  animation-name: ', ';\n  animation-timing-function: ease-in;\n'], ['\n  animation-name: ', ';\n  animation-timing-function: ease-in;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _BaseAnimation = require('../BaseAnimation');

var _BaseAnimation2 = _interopRequireDefault(_BaseAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LightSpeedOutAnimation = (0, _styledComponents.keyframes)(_templateObject);

var LightSpeedOut = (0, _styledComponents2.default)(_BaseAnimation2.default)(_templateObject2, LightSpeedOutAnimation);

exports.default = LightSpeedOut;