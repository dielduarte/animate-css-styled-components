'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  from {\n      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n      animation-timing-function: ease-in;\n      opacity: 0;\n    }\n\n    40% {\n      transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n      animation-timing-function: ease-in;\n    }\n\n    60% {\n      transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n      opacity: 1;\n    }\n\n    80% {\n      transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    }\n\n    to {\n      transform: perspective(400px);\n    }\n'], ['\n  from {\n      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n      animation-timing-function: ease-in;\n      opacity: 0;\n    }\n\n    40% {\n      transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n      animation-timing-function: ease-in;\n    }\n\n    60% {\n      transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n      opacity: 1;\n    }\n\n    80% {\n      transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    }\n\n    to {\n      transform: perspective(400px);\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  animation-name: ', ';\n  backface-visibility: visible !important;\n'], ['\n  animation-name: ', ';\n  backface-visibility: visible !important;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _BaseAnimation = require('../BaseAnimation');

var _BaseAnimation2 = _interopRequireDefault(_BaseAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FlipInYAnimation = (0, _styledComponents.keyframes)(_templateObject);

var FlipInY = (0, _styledComponents2.default)(_BaseAnimation2.default)(_templateObject2, FlipInYAnimation);

exports.default = FlipInY;