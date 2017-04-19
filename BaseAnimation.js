'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  animation-duration: ', ';\n  animation-timing-function: ', ';\n  animation-delay: ', ';\n  animation-iteration-count: ', ';\n  animation-direction: ', ';\n  animation-fill-mode: ', ';\n  animation-play-state:  ', ';\n  display: ', ';\n'], ['\n  animation-duration: ', ';\n  animation-timing-function: ', ';\n  animation-delay: ', ';\n  animation-iteration-count: ', ';\n  animation-direction: ', ';\n  animation-fill-mode: ', ';\n  animation-play-state:  ', ';\n  display: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseAnimation = _styledComponents2.default.div(_templateObject, function (props) {
  return props.duration ? props.duration : '1s';
}, function (props) {
  return props.timingFunction ? props.timingFunction : 'ease';
}, function (props) {
  return props.delay ? props.delay : '0s';
}, function (props) {
  return props.iterationCount ? props.iterationCount : '1';
}, function (props) {
  return props.direction ? props.direction : 'normal';
}, function (props) {
  return props.fillMode ? props.fillMode : 'both';
}, function (props) {
  return props.playState ? props.playState : 'running';
}, function (props) {
  return props.inline ? 'inline-block' : 'initial';
});

exports.default = BaseAnimation;