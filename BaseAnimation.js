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
  return props.duration;
}, function (props) {
  return props.timingFunction;
}, function (props) {
  return props.delay;
}, function (props) {
  return props.iterationCount;
}, function (props) {
  return props.direction;
}, function (props) {
  return props.fillMode;
}, function (props) {
  return props.playState;
}, function (props) {
  return props.display;
});

BaseAnimation.defaultProps = {
  duration: '1s',
  timingFunction: 'ease',
  delay: '0s',
  iterationCount: '1',
  direction: 'normal',
  fillMode: 'both',
  playState: 'running',
  display: 'block'
};

exports.default = BaseAnimation;