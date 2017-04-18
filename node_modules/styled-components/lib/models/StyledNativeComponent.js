'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _isTag = require('../utils/isTag');

var _isTag2 = _interopRequireDefault(_isTag);

var _ThemeProvider = require('./ThemeProvider');

var _InlineStyle = require('./InlineStyle');

var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

var _AbstractStyledComponent = require('./AbstractStyledComponent');

var _AbstractStyledComponent2 = _interopRequireDefault(_AbstractStyledComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var babelPluginFlowReactPropTypes_proptype_Theme = require('./ThemeProvider').babelPluginFlowReactPropTypes_proptype_Theme || require('react').PropTypes.any;

var babelPluginFlowReactPropTypes_proptype_Target = require('../types').babelPluginFlowReactPropTypes_proptype_Target || require('react').PropTypes.any;

var babelPluginFlowReactPropTypes_proptype_RuleSet = require('../types').babelPluginFlowReactPropTypes_proptype_RuleSet || require('react').PropTypes.any;

var createStyledNativeComponent = function createStyledNativeComponent(target, rules, parent) {
  /* Handle styled(OtherStyledNativeComponent) differently */
  var isStyledNativeComponent = _AbstractStyledComponent2.default.isPrototypeOf(target);
  if (isStyledNativeComponent && !(0, _isTag2.default)(target)) {
    return createStyledNativeComponent(target.target, target.rules.concat(rules), target);
  }

  var inlineStyle = new _InlineStyle2.default(rules);
  var ParentComponent = parent || _AbstractStyledComponent2.default;

  // $FlowFixMe need to convince flow that ParentComponent can't be string here

  var StyledNativeComponent = function (_ParentComponent) {
    _inherits(StyledNativeComponent, _ParentComponent);

    function StyledNativeComponent() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, StyledNativeComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StyledNativeComponent.__proto__ || Object.getPrototypeOf(StyledNativeComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        theme: {},
        generatedStyles: undefined
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(StyledNativeComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this2 = this;

        // If there is a theme in the context, subscribe to the event emitter. This
        // is necessary due to pure components blocking context updates, this circumvents
        // that by updating when an event is emitted
        if (this.context[_ThemeProvider.CHANNEL]) {
          var subscribe = this.context[_ThemeProvider.CHANNEL];
          this.unsubscribe = subscribe(function (nextTheme) {
            // This will be called once immediately

            // Props should take precedence over ThemeProvider, which should take precedence over
            // defaultProps, but React automatically puts defaultProps on props.
            var defaultProps = _this2.constructor.defaultProps;

            var isDefaultTheme = defaultProps && _this2.props.theme === defaultProps.theme;
            var theme = _this2.props.theme && !isDefaultTheme ? _this2.props.theme : nextTheme;
            var generatedStyles = _this2.generateAndInjectStyles(theme, _this2.props);
            _this2.setState({ generatedStyles: generatedStyles, theme: theme });
          });
        } else {
          var _theme = this.props.theme || {};
          var generatedStyles = this.generateAndInjectStyles(_theme, this.props);
          this.setState({ generatedStyles: generatedStyles, theme: _theme });
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this3 = this;

        this.setState(function (oldState) {
          // Props should take precedence over ThemeProvider, which should take precedence over
          // defaultProps, but React automatically puts defaultProps on props.
          var defaultProps = _this3.constructor.defaultProps;

          var isDefaultTheme = defaultProps && nextProps.theme === defaultProps.theme;
          var theme = nextProps.theme && !isDefaultTheme ? nextProps.theme : oldState.theme;
          var generatedStyles = _this3.generateAndInjectStyles(theme, nextProps);

          return { theme: theme, generatedStyles: generatedStyles };
        });
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.unsubscribe) {
          this.unsubscribe();
        }
      }
    }, {
      key: 'setNativeProps',
      value: function setNativeProps(nativeProps) {
        var root = typeof this.root === 'string' ? this.refs[this.root] : this.root;

        root.setNativeProps(nativeProps);
      }
    }, {
      key: 'generateRef',
      value: function generateRef() {
        var _this4 = this;

        var innerRef = this.props.innerRef;

        var innerRefType = typeof innerRef === 'undefined' ? 'undefined' : _typeof(innerRef);

        if (innerRefType === 'string') {
          this.root = innerRef;
          return innerRef;
        }

        return function (component) {
          _this4.root = component;

          if (innerRefType === 'function') {
            innerRef(component);
          }
        };
      }
    }, {
      key: 'generateAndInjectStyles',
      value: function generateAndInjectStyles(theme, props) {
        var executionContext = _extends({}, props, { theme: theme });
        return inlineStyle.generateStyleObject(executionContext);
      }
      /* eslint-disable react/prop-types */

    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            style = _props.style,
            children = _props.children;
        var generatedStyles = this.state.generatedStyles;


        var propsForElement = _extends({}, this.props);
        /* Allow passed in style to be an array or an object */
        propsForElement.style = [generatedStyles].concat(style);

        propsForElement.ref = this.generateRef();
        if ((0, _isTag2.default)(target)) delete propsForElement.innerRef;

        return (0, _react.createElement)(target, propsForElement, children);
      }
    }]);

    return StyledNativeComponent;
  }(ParentComponent);

  /* Used for inheritance */


  StyledNativeComponent.rules = rules;
  StyledNativeComponent.target = target;
  StyledNativeComponent.displayName = (0, _isTag2.default)(target) ? 'styled.' + target : 'Styled(' + target.displayName + ')';

  return StyledNativeComponent;
};

exports.default = createStyledNativeComponent;
module.exports = exports['default'];