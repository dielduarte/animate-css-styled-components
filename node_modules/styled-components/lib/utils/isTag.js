'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTag;

var babelPluginFlowReactPropTypes_proptype_Target = require('../types').babelPluginFlowReactPropTypes_proptype_Target || require('react').PropTypes.any;

function isTag(target) /* : %checks */{
  return typeof target === 'string';
}
module.exports = exports['default'];