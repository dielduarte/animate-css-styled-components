'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  0% {\n     transform: translateX(0);\n   }\n\n   6.5% {\n     transform: translateX(-6px) rotateY(-9deg);\n   }\n\n   18.5% {\n     transform: translateX(5px) rotateY(7deg);\n   }\n\n   31.5% {\n     transform: translateX(-3px) rotateY(-5deg);\n   }\n\n   43.5% {\n     transform: translateX(2px) rotateY(3deg);\n   }\n\n   50% {\n     transform: translateX(0);\n   }\n'], ['\n  0% {\n     transform: translateX(0);\n   }\n\n   6.5% {\n     transform: translateX(-6px) rotateY(-9deg);\n   }\n\n   18.5% {\n     transform: translateX(5px) rotateY(7deg);\n   }\n\n   31.5% {\n     transform: translateX(-3px) rotateY(-5deg);\n   }\n\n   43.5% {\n     transform: translateX(2px) rotateY(3deg);\n   }\n\n   50% {\n     transform: translateX(0);\n   }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  animation-name: ', ';\n  animation-timing-function: ease-in-out;\n'], ['\n  animation-name: ', ';\n  animation-timing-function: ease-in-out;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _BaseAnimation = require('../BaseAnimation');

var _BaseAnimation2 = _interopRequireDefault(_BaseAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeadShakeAnimation = (0, _styledComponents.keyframes)(_templateObject);

var HeadShake = (0, _styledComponents2.default)(_BaseAnimation2.default)(_templateObject2, HeadShakeAnimation);

exports.default = HeadShake;