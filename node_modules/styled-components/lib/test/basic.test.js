'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral([''], ['']),
    _templateObject2 = _taggedTemplateLiteral(['   \n   '], ['   \\n   ']),
    _templateObject3 = _taggedTemplateLiteral(['\n        ', '\n      '], ['\n        ', '\n      ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _enzyme = require('enzyme');

var _mochaJsdom = require('mocha-jsdom');

var _mochaJsdom2 = _interopRequireDefault(_mochaJsdom);

var _StyleSheet = require('../models/StyleSheet');

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styled = void 0;

describe('basic', function () {
  /**
   * Make sure the setup is the same for every test
   */
  beforeEach(function () {
    styled = (0, _utils.resetStyled)();
  });

  it('should not throw an error when called', function () {
    styled.div(_templateObject);
  });

  it('should inject a stylesheet when a component is created', function () {
    var Comp = styled.div(_templateObject);
    (0, _enzyme.shallow)(_react2.default.createElement(Comp, null));
    (0, _expect2.default)(_StyleSheet2.default.injected).toBe(true);
  });

  it('should not generate any styles by default', function () {
    styled.div(_templateObject);
    (0, _utils.expectCSSMatches)('');
  });

  it('should generate an empty tag once rendered', function () {
    var Comp = styled.div(_templateObject);
    (0, _enzyme.shallow)(_react2.default.createElement(Comp, null));
    (0, _utils.expectCSSMatches)('.a {  }');
  });

  /* TODO: we should probably pretty-format the output so this test might have to change */
  it('should pass through all whitespace', function () {
    var Comp = styled.div(_templateObject2);
    (0, _enzyme.shallow)(_react2.default.createElement(Comp, null));
    (0, _utils.expectCSSMatches)('.a {    \n    }', { ignoreWhitespace: false });
  });

  it('should inject only once for a styled component, no matter how often it\'s mounted', function () {
    var Comp = styled.div(_templateObject);
    (0, _enzyme.shallow)(_react2.default.createElement(Comp, null));
    (0, _enzyme.shallow)(_react2.default.createElement(Comp, null));
    (0, _utils.expectCSSMatches)('.a {  }');
  });

  it('Should have the correct styled(component) displayName', function () {
    var CompWithoutName = function CompWithoutName() {
      return function () {
        return _react2.default.createElement('div', null);
      };
    };

    var StyledTag = styled.div(_templateObject);
    (0, _expect2.default)(StyledTag.displayName).toBe('styled.div');

    var CompWithName = function CompWithName() {
      return _react2.default.createElement('div', null);
    };
    CompWithName.displayName = null;
    var StyledCompWithName = styled(CompWithName)(_templateObject);
    (0, _expect2.default)(StyledCompWithName.displayName).toBe('Styled(CompWithName)');

    var CompWithDisplayName = CompWithoutName();
    CompWithDisplayName.displayName = 'displayName';
    var StyledCompWithDisplayName = styled(CompWithDisplayName)(_templateObject);
    (0, _expect2.default)(StyledCompWithDisplayName.displayName).toBe('Styled(displayName)');

    var CompWithBoth = function CompWithBoth() {
      return _react2.default.createElement('div', null);
    };
    CompWithBoth.displayName = 'displayName';
    var StyledCompWithBoth = styled(CompWithBoth)(_templateObject);
    (0, _expect2.default)(StyledCompWithBoth.displayName).toBe('Styled(displayName)');

    var CompWithNothing = CompWithoutName();
    CompWithNothing.displayName = null;
    var StyledCompWithNothing = styled(CompWithNothing)(_templateObject);
    (0, _expect2.default)(StyledCompWithNothing.displayName).toBe('Styled(Component)');
  });

  describe('innerRef', function () {
    (0, _mochaJsdom2.default)();

    it('should handle styled-components correctly', function () {
      var Comp = styled.div(_templateObject3, function (props) {
        return (0, _expect2.default)(props.innerRef).toExist();
      });
      var WrapperComp = function (_Component) {
        _inherits(WrapperComp, _Component);

        function WrapperComp() {
          _classCallCheck(this, WrapperComp);

          return _possibleConstructorReturn(this, (WrapperComp.__proto__ || Object.getPrototypeOf(WrapperComp)).apply(this, arguments));
        }

        _createClass(WrapperComp, [{
          key: 'render',
          value: function render() {
            var _this2 = this;

            return _react2.default.createElement(Comp, { innerRef: function innerRef(comp) {
                _this2.testRef = comp;
              } });
          }
        }]);

        return WrapperComp;
      }(_react.Component);
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(WrapperComp, null));

      // $FlowFixMe
      (0, _expect2.default)(wrapper.node.testRef).toExist();
      // $FlowFixMe
      (0, _expect2.default)(wrapper.node.ref).toNotExist();
    });

    it('should handle inherited components correctly', function () {
      var StyledComp = styled.div(_templateObject);

      var WrappedStyledComp = function (_React$Component) {
        _inherits(WrappedStyledComp, _React$Component);

        function WrappedStyledComp() {
          _classCallCheck(this, WrappedStyledComp);

          return _possibleConstructorReturn(this, (WrappedStyledComp.__proto__ || Object.getPrototypeOf(WrappedStyledComp)).apply(this, arguments));
        }

        _createClass(WrappedStyledComp, [{
          key: 'render',
          value: function render() {
            return _react2.default.createElement(StyledComp, this.props);
          }
        }]);

        return WrappedStyledComp;
      }(_react2.default.Component);

      var ChildComp = styled(WrappedStyledComp)(_templateObject);
      var WrapperComp = function (_Component2) {
        _inherits(WrapperComp, _Component2);

        function WrapperComp() {
          _classCallCheck(this, WrapperComp);

          return _possibleConstructorReturn(this, (WrapperComp.__proto__ || Object.getPrototypeOf(WrapperComp)).apply(this, arguments));
        }

        _createClass(WrapperComp, [{
          key: 'render',
          value: function render() {
            var _this5 = this;

            return _react2.default.createElement(ChildComp, { innerRef: function innerRef(comp) {
                _this5.testRef = comp;
              } });
          }
        }]);

        return WrapperComp;
      }(_react.Component);
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(WrapperComp, null));

      // $FlowFixMe
      (0, _expect2.default)(wrapper.node.testRef).toExist();
      // $FlowFixMe
      (0, _expect2.default)(wrapper.node.ref).toNotExist();
    });
  });
});