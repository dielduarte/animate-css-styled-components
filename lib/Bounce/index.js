'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  from, 20%, 53%, 80%, to {\n   animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n   transform: translate3d(0,0,0);\n  }\n\n  40%, 43% {\n   animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n   transform: translate3d(0, -30px, 0);\n  }\n\n  70% {\n   animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n   transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n   transform: translate3d(0,-4px,0);\n  }\n'], ['\n  from, 20%, 53%, 80%, to {\n   animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n   transform: translate3d(0,0,0);\n  }\n\n  40%, 43% {\n   animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n   transform: translate3d(0, -30px, 0);\n  }\n\n  70% {\n   animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n   transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n   transform: translate3d(0,-4px,0);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  animation-name: ', ';\n'], ['\n  animation-name: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _BaseAnimation = require('../BaseAnimation');

var _BaseAnimation2 = _interopRequireDefault(_BaseAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var bounceAnimation = (0, _styledComponents.keyframes)(_templateObject);

var Bounce = (0, _styledComponents2.default)(_BaseAnimation2.default)(_templateObject2, bounceAnimation);

exports.default = Bounce;