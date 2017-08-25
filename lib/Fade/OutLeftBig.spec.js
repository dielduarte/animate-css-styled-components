'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _OutLeftBig = require('./OutLeftBig');

var _OutLeftBig2 = _interopRequireDefault(_OutLeftBig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders with default props', function () {
	var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_OutLeftBig2.default, null)).toJSON();

	expect(tree).toMatchSnapshot();
});