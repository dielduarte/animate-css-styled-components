'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  from {\n      transform: scale3d(1, 1, 1);\n    }\n\n    30% {\n      transform: scale3d(1.25, 0.75, 1);\n    }\n\n    40% {\n      transform: scale3d(0.75, 1.25, 1);\n    }\n\n    50% {\n      transform: scale3d(1.15, 0.85, 1);\n    }\n\n    65% {\n      transform: scale3d(.95, 1.05, 1);\n    }\n\n    75% {\n      transform: scale3d(1.05, .95, 1);\n    }\n\n    to {\n      transform: scale3d(1, 1, 1);\n    }\n'], ['\n  from {\n      transform: scale3d(1, 1, 1);\n    }\n\n    30% {\n      transform: scale3d(1.25, 0.75, 1);\n    }\n\n    40% {\n      transform: scale3d(0.75, 1.25, 1);\n    }\n\n    50% {\n      transform: scale3d(1.15, 0.85, 1);\n    }\n\n    65% {\n      transform: scale3d(.95, 1.05, 1);\n    }\n\n    75% {\n      transform: scale3d(1.05, .95, 1);\n    }\n\n    to {\n      transform: scale3d(1, 1, 1);\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  animation-name: ', ';\n'], ['\n  animation-name: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _BaseAnimation = require('../BaseAnimation');

var _BaseAnimation2 = _interopRequireDefault(_BaseAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RubberBandAnimation = (0, _styledComponents.keyframes)(_templateObject);

var RubberBand = (0, _styledComponents2.default)(_BaseAnimation2.default)(_templateObject2, RubberBandAnimation);

exports.default = RubberBand;