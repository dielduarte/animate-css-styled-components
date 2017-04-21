'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  0% {\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    transform: rotate3d(0, 0, 1, 80deg);\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n  }\n\n  40%, 80% {\n    transform: rotate3d(0, 0, 1, 60deg);\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n'], ['\n  0% {\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    transform: rotate3d(0, 0, 1, 80deg);\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n  }\n\n  40%, 80% {\n    transform: rotate3d(0, 0, 1, 60deg);\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  animation-name: ', ';\n'], ['\n  animation-name: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _BaseAnimation = require('../BaseAnimation');

var _BaseAnimation2 = _interopRequireDefault(_BaseAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HingeAnimation = (0, _styledComponents.keyframes)(_templateObject);

var Hinge = (0, _styledComponents2.default)(_BaseAnimation2.default)(_templateObject2, HingeAnimation);

exports.default = Hinge;