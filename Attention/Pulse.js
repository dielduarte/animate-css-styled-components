'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n'], ['\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  animation-name: ', ';\n'], ['\n  animation-name: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _BaseAnimation = require('../BaseAnimation');

var _BaseAnimation2 = _interopRequireDefault(_BaseAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PulseAnimation = (0, _styledComponents.keyframes)(_templateObject);

var Pulse = (0, _styledComponents2.default)(_BaseAnimation2.default)(_templateObject2, PulseAnimation);

exports.default = Pulse;