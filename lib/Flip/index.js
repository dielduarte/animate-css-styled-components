'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  from {\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    transform: perspective(400px) scale3d(.95, .95, .95);\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    transform: perspective(400px);\n    animation-timing-function: ease-in;\n  }\n'], ['\n  from {\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    transform: perspective(400px) scale3d(.95, .95, .95);\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    transform: perspective(400px);\n    animation-timing-function: ease-in;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  animation-name: ', ';\n  backface-visibility: visible;\n'], ['\n  animation-name: ', ';\n  backface-visibility: visible;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _BaseAnimation = require('../BaseAnimation');

var _BaseAnimation2 = _interopRequireDefault(_BaseAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FlipAnimation = (0, _styledComponents.keyframes)(_templateObject);

var Flip = (0, _styledComponents2.default)(_BaseAnimation2.default)(_templateObject2, FlipAnimation);

exports.default = Flip;