'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  from, to {\n   transform: translate3d(0, 0, 0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n   transform: translate3d(-10px, 0, 0);\n  }\n\n  20%, 40%, 60%, 80% {\n   transform: translate3d(10px, 0, 0);\n  }\n'], ['\n  from, to {\n   transform: translate3d(0, 0, 0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n   transform: translate3d(-10px, 0, 0);\n  }\n\n  20%, 40%, 60%, 80% {\n   transform: translate3d(10px, 0, 0);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  animation-name: ', ';\n'], ['\n  animation-name: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _BaseAnimation = require('../BaseAnimation');

var _BaseAnimation2 = _interopRequireDefault(_BaseAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ShakeAnimation = (0, _styledComponents.keyframes)(_templateObject);

var Shake = (0, _styledComponents2.default)(_BaseAnimation2.default)(_templateObject2, ShakeAnimation);

exports.default = Shake;