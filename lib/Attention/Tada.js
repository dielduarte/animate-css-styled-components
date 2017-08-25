'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%, 20% {\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%, 60%, 80% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n'], ['\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%, 20% {\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%, 60%, 80% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  animation-name: ', ';\n'], ['\n  animation-name: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _BaseAnimation = require('../BaseAnimation');

var _BaseAnimation2 = _interopRequireDefault(_BaseAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TadaAnimation = (0, _styledComponents.keyframes)(_templateObject);

var Tada = (0, _styledComponents2.default)(_BaseAnimation2.default)(_templateObject2, TadaAnimation);

exports.default = Tada;