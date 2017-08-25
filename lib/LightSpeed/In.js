'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  from {\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: none;\n    opacity: 1;\n  }\n'], ['\n  from {\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: none;\n    opacity: 1;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  animation-name: ', ';\n  animation-timing-function: ease-out;\n'], ['\n  animation-name: ', ';\n  animation-timing-function: ease-out;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _BaseAnimation = require('../BaseAnimation');

var _BaseAnimation2 = _interopRequireDefault(_BaseAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LightSpeedInAnimation = (0, _styledComponents.keyframes)(_templateObject);

var LightSpeedIn = (0, _styledComponents2.default)(_BaseAnimation2.default)(_templateObject2, LightSpeedInAnimation);

exports.default = LightSpeedIn;