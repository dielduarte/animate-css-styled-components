'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTheme = exports.ThemeProvider = exports.injectGlobal = exports.keyframes = exports.css = undefined;

var _generateAlphabeticName = require('./utils/generateAlphabeticName');

var _generateAlphabeticName2 = _interopRequireDefault(_generateAlphabeticName);

var _css = require('./constructors/css');

var _css2 = _interopRequireDefault(_css);

var _injectGlobal = require('./constructors/injectGlobal');

var _injectGlobal2 = _interopRequireDefault(_injectGlobal);

var _StyledComponent = require('./models/StyledComponent');

var _StyledComponent2 = _interopRequireDefault(_StyledComponent);

var _styled2 = require('./constructors/styled');

var _styled3 = _interopRequireDefault(_styled2);

var _keyframes2 = require('./constructors/keyframes');

var _keyframes3 = _interopRequireDefault(_keyframes2);

var _ComponentStyle2 = require('./models/ComponentStyle');

var _ComponentStyle3 = _interopRequireDefault(_ComponentStyle2);

var _ThemeProvider = require('./models/ThemeProvider');

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

var _withTheme = require('./hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Instantiate singletons */


/* Import components */


/* Import singleton constructors */
var keyframes = (0, _keyframes3.default)(_generateAlphabeticName2.default);

/* Import Higher Order Components */


/* Import singletons */

var styled = (0, _styled3.default)((0, _StyledComponent2.default)((0, _ComponentStyle3.default)(_generateAlphabeticName2.default)));

/* Export everything */
exports.default = styled;
exports.css = _css2.default;
exports.keyframes = keyframes;
exports.injectGlobal = _injectGlobal2.default;
exports.ThemeProvider = _ThemeProvider2.default;
exports.withTheme = _withTheme2.default;