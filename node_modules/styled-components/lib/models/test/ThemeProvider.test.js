'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _enzyme = require('enzyme');

var _ThemeProvider = require('../ThemeProvider');

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* eslint-disable react/no-multi-comp */


describe('ThemeProvider', function () {
  it('should not throw an error when no children are passed', function () {
    var result = (0, _enzyme.shallow)(_react2.default.createElement(_ThemeProvider2.default, { theme: {} }));
    (0, _expect2.default)(result.html()).toEqual(null);
  });

  it('should accept a theme prop that\'s a plain object', function () {
    (0, _enzyme.shallow)(_react2.default.createElement(_ThemeProvider2.default, { theme: { main: 'black' } }));
  });

  it('should render its child', function () {
    var child = _react2.default.createElement(
      'p',
      null,
      'Child!'
    );
    var renderedComp = (0, _enzyme.shallow)(_react2.default.createElement(
      _ThemeProvider2.default,
      { theme: { main: 'black' } },
      child
    ));
    (0, _expect2.default)(renderedComp.contains(child)).toEqual(true);
  });

  it('should merge its theme with an outer theme', function (done) {
    var outerTheme = { main: 'black' };
    var innerTheme = { secondary: 'black' };
    // Setup Child

    var Child = function (_React$Component) {
      _inherits(Child, _React$Component);

      function Child() {
        _classCallCheck(this, Child);

        return _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).apply(this, arguments));
      }

      _createClass(Child, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          this.context[_ThemeProvider.CHANNEL](function (theme) {
            (0, _expect2.default)(theme).toEqual(_extends({}, outerTheme, innerTheme));
            done();
          });
        }
      }, {
        key: 'render',
        value: function render() {
          return null;
        }
      }]);

      return Child;
    }(_react2.default.Component);

    Child.contextTypes = _defineProperty({}, _ThemeProvider.CHANNEL, _propTypes2.default.object);

    (0, _enzyme.render)(_react2.default.createElement(
      _ThemeProvider2.default,
      { theme: outerTheme },
      _react2.default.createElement(
        _ThemeProvider2.default,
        { theme: innerTheme },
        _react2.default.createElement(Child, null)
      )
    ));
  });

  it('should merge its theme with multiple outer themes', function (done) {
    var outerestTheme = { main: 'black' };
    var outerTheme = { main: 'blue' };
    var innerTheme = { secondary: 'black' };
    // Setup Child

    var Child = function (_React$Component2) {
      _inherits(Child, _React$Component2);

      function Child() {
        _classCallCheck(this, Child);

        return _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).apply(this, arguments));
      }

      _createClass(Child, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          this.context[_ThemeProvider.CHANNEL](function (theme) {
            (0, _expect2.default)(theme).toEqual(_extends({}, outerestTheme, outerTheme, innerTheme));
            done();
          });
        }
      }, {
        key: 'render',
        value: function render() {
          return null;
        }
      }]);

      return Child;
    }(_react2.default.Component);

    Child.contextTypes = _defineProperty({}, _ThemeProvider.CHANNEL, _propTypes2.default.object);

    (0, _enzyme.render)(_react2.default.createElement(
      _ThemeProvider2.default,
      { theme: outerestTheme },
      _react2.default.createElement(
        _ThemeProvider2.default,
        { theme: outerTheme },
        _react2.default.createElement(
          _ThemeProvider2.default,
          { theme: innerTheme },
          _react2.default.createElement(Child, null)
        )
      )
    ));
  });

  it('should be able to render two independent themes', function (done) {
    var themes = {
      one: { main: 'black', secondary: 'red' },
      two: { main: 'blue', other: 'green' }
    };
    var childRendered = 0;
    // Setup Child

    var Child = function (_React$Component3) {
      _inherits(Child, _React$Component3);

      function Child() {
        _classCallCheck(this, Child);

        return _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).apply(this, arguments));
      }

      _createClass(Child, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          var _this4 = this;

          this.context[_ThemeProvider.CHANNEL](function (theme) {
            // eslint-disable-next-line react/prop-types
            (0, _expect2.default)(theme).toEqual(themes[_this4.props.shouldHaveTheme]);
            childRendered++; // eslint-disable-line no-plusplus
            if (childRendered === Object.keys(themes).length) {
              done();
            }
          });
        }
      }, {
        key: 'render',
        value: function render() {
          return null;
        }
      }]);

      return Child;
    }(_react2.default.Component);

    Child.contextTypes = _defineProperty({}, _ThemeProvider.CHANNEL, _propTypes2.default.object);

    (0, _enzyme.render)(_react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _ThemeProvider2.default,
        { theme: themes.one },
        _react2.default.createElement(Child, { shouldHaveTheme: 'one' })
      ),
      _react2.default.createElement(
        _ThemeProvider2.default,
        { theme: themes.two },
        _react2.default.createElement(Child, { shouldHaveTheme: 'two' })
      )
    ));
  });
});