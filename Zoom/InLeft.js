'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  from {\n      opacity: 0;\n      transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    }\n\n    60% {\n      opacity: 1;\n      transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n      animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    }\n'], ['\n  from {\n      opacity: 0;\n      transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    }\n\n    60% {\n      opacity: 1;\n      transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n      animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  animation-name: ', ';\n'], ['\n  animation-name: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _BaseAnimation = require('../BaseAnimation');

var _BaseAnimation2 = _interopRequireDefault(_BaseAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ZoomInLeftAnimation = (0, _styledComponents.keyframes)(_templateObject);

var ZoomInLeft = (0, _styledComponents2.default)(_BaseAnimation2.default)(_templateObject2, ZoomInLeftAnimation);

exports.default = ZoomInLeft;