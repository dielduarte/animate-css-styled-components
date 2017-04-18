'use strict';

var _templateObject = _taggedTemplateLiteral(['\n      color: ', ';\n    '], ['\n      color: ', ';\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n      background: ', ';\n    '], ['\n      background: ', ';\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n      color: ', ';\n      z-index: ', 'px;\n    '], ['\n      color: ', ';\n      z-index: ', 'px;\n    ']);

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _mochaJsdom = require('mocha-jsdom');

var _mochaJsdom2 = _interopRequireDefault(_mochaJsdom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _utils = require('./utils');

var _ThemeProvider = require('../models/ThemeProvider');

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styled = void 0;

describe('theming', function () {
  beforeEach(function () {
    styled = (0, _utils.resetStyled)();
  });

  it('should inject props.theme into a styled component', function () {
    var Comp = styled.div(_templateObject, function (props) {
      return props.theme.color;
    });
    var theme = { color: 'black' };
    (0, _enzyme.render)(_react2.default.createElement(
      _ThemeProvider2.default,
      { theme: theme },
      _react2.default.createElement(Comp, null)
    ));
    (0, _utils.expectCSSMatches)('.a { color: ' + theme.color + '; }');
  });

  it('should inject props.theme into a styled component multiple levels deep', function () {
    var Comp = styled.div(_templateObject, function (props) {
      return props.theme.color;
    });
    var theme = { color: 'black' };
    (0, _enzyme.render)(_react2.default.createElement(
      _ThemeProvider2.default,
      { theme: theme },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(Comp, null)
        )
      )
    ));
    (0, _utils.expectCSSMatches)('.a { color: ' + theme.color + '; }');
  });

  it('should properly allow a component to fallback to its default props when a theme is not provided', function () {
    var Comp1 = styled.div(_templateObject, function (props) {
      return props.theme.test.color;
    });

    Comp1.defaultProps = {
      theme: {
        test: {
          color: "purple"
        }
      }
    };
    (0, _enzyme.render)(_react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(Comp1, null)
    ));
    (0, _utils.expectCSSMatches)('.a { color: purple; }');
  });

  // https://github.com/styled-components/styled-components/issues/344
  it('should use ThemeProvider theme instead of defaultProps theme', function () {
    var Comp1 = styled.div(_templateObject, function (props) {
      return props.theme.test.color;
    });

    Comp1.defaultProps = {
      theme: {
        test: {
          color: "purple"
        }
      }
    };
    var theme = { test: { color: 'green' } };

    (0, _enzyme.render)(_react2.default.createElement(
      _ThemeProvider2.default,
      { theme: theme },
      _react2.default.createElement(Comp1, null)
    ));
    (0, _utils.expectCSSMatches)('.a { color: green; }');
  });

  it('should properly allow a component to override the theme with a prop even if it is equal to defaultProps theme', function () {
    var Comp1 = styled.div(_templateObject, function (props) {
      return props.theme.test.color;
    });

    Comp1.defaultProps = {
      theme: {
        test: {
          color: "purple"
        }
      }
    };
    var theme = { test: { color: 'green' } };

    (0, _enzyme.render)(_react2.default.createElement(
      _ThemeProvider2.default,
      { theme: theme },
      _react2.default.createElement(Comp1, { theme: { test: { color: 'purple' } } })
    ));
    (0, _utils.expectCSSMatches)('.a { color: purple; }');
  });

  it('should properly allow a component to override the theme with a prop', function () {
    var Comp = styled.div(_templateObject, function (props) {
      return props.theme.color;
    });

    var theme = {
      color: 'purple'
    };

    (0, _enzyme.render)(_react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _ThemeProvider2.default,
        { theme: theme },
        _react2.default.createElement(Comp, { theme: { color: 'red' } })
      )
    ));
    (0, _utils.expectCSSMatches)('.a { color: red; }');
  });

  it('should properly set the theme with an empty object when no theme is provided and no defaults are set', function () {
    var Comp1 = styled.div(_templateObject, function (props) {
      return props.theme.color;
    });
    (0, _enzyme.render)(_react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(Comp1, null)
    ));
    (0, _utils.expectCSSMatches)('.a { color: ; }');
  });

  it('should only inject props.theme into styled components within its child component tree', function () {
    var Comp1 = styled.div(_templateObject, function (props) {
      return props.theme.color;
    });
    var Comp2 = styled.div(_templateObject2, function (props) {
      return props.theme.color;
    });

    var theme = { color: 'black' };
    (0, _enzyme.render)(_react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _ThemeProvider2.default,
        { theme: theme },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(Comp1, null)
        )
      ),
      _react2.default.createElement(Comp2, null)
    ));
    (0, _utils.expectCSSMatches)('.a { color: ' + theme.color + '; } .b { background: ; }');
  });

  it('should inject props.theme into all styled components within the child component tree', function () {
    var Comp1 = styled.div(_templateObject, function (props) {
      return props.theme.color;
    });
    var Comp2 = styled.div(_templateObject2, function (props) {
      return props.theme.color;
    });
    var theme = { color: 'black' };
    (0, _enzyme.render)(_react2.default.createElement(
      _ThemeProvider2.default,
      { theme: theme },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(Comp1, null)
        ),
        _react2.default.createElement(Comp2, null)
      )
    ));
    (0, _utils.expectCSSMatches)('.a { color: ' + theme.color + '; } .b { background: ' + theme.color + '; }');
  });

  it('should inject new CSS when the theme changes', function () {
    var Comp = styled.div(_templateObject, function (props) {
      return props.theme.color;
    });
    var originalTheme = { color: 'black' };
    var newTheme = { color: 'blue' };
    var theme = originalTheme;
    // Force render the component
    var renderComp = function renderComp() {
      (0, _enzyme.render)(_react2.default.createElement(
        _ThemeProvider2.default,
        { theme: theme },
        _react2.default.createElement(Comp, null)
      ));
    };
    renderComp();
    var initialCSS = (0, _utils.expectCSSMatches)('.a { color: ' + theme.color + '; }');
    // Change the theme
    theme = newTheme;
    renderComp();
    (0, _utils.expectCSSMatches)(initialCSS + '.b { color: ' + newTheme.color + '; }');
  });
});

describe('theming (jsdom)', function () {
  (0, _mochaJsdom2.default)();

  beforeEach(function () {
    styled = (0, _utils.resetStyled)();
  });

  it('should properly render with the same theme from default props on re-render', function () {
    var Comp1 = styled.div(_templateObject, function (props) {
      return props.theme.color;
    });

    Comp1.defaultProps = {
      theme: {
        color: "purple"
      }
    };
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(Comp1, null));
    (0, _utils.expectCSSMatches)('.a { color: purple; }');

    wrapper.update();
    (0, _utils.expectCSSMatches)('.a { color: purple; }');
  });

  it('should properly update style if theme is changed', function () {
    var Comp1 = styled.div(_templateObject, function (props) {
      return props.theme.color;
    });

    Comp1.defaultProps = {
      theme: {
        color: "purple"
      }
    };
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(Comp1, null));
    (0, _utils.expectCSSMatches)('.a { color: purple; }');

    wrapper.setProps({ theme: { color: 'pink' } });
    (0, _utils.expectCSSMatches)('.a { color: purple; }.b { color: pink; }');
  });

  it('should properly update style if props used in styles is changed', function () {
    var Comp1 = styled.div(_templateObject3, function (props) {
      return props.theme.color;
    }, function (props) {
      return props.zIndex;
    });

    Comp1.defaultProps = {
      theme: {
        color: "purple"
      },
      zIndex: 0
    };
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(Comp1, null));
    var expectedStyles = '.a { color: purple; z-index: 0px; }';
    (0, _utils.expectCSSMatches)(expectedStyles);

    wrapper.setProps({ theme: { color: 'pink' } });
    expectedStyles = expectedStyles + '.b { color: pink; z-index: 0px; }';
    (0, _utils.expectCSSMatches)(expectedStyles);

    wrapper.setProps({ zIndex: 1 });
    (0, _utils.expectCSSMatches)(expectedStyles + '.c { color: pink; z-index: 1px; }');
  });

  it('should change the classnames when the theme changes', function () {
    var Comp = styled.div(_templateObject, function (props) {
      return props.theme.color;
    });

    var originalTheme = { color: 'black' };
    var newTheme = { color: 'blue' };

    var Theme = function Theme(_ref) {
      var theme = _ref.theme;
      return _react2.default.createElement(
        _ThemeProvider2.default,
        { theme: theme },
        _react2.default.createElement(Comp, { someProps: theme })
      );
    };

    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(Theme, { theme: originalTheme }));

    (0, _utils.expectCSSMatches)('.a { color: ' + originalTheme.color + '; }');
    (0, _expect2.default)(wrapper.find('div').prop('className')).toBe('a');

    // Change theme
    wrapper.setProps({ theme: newTheme });

    (0, _utils.expectCSSMatches)('.a { color: ' + originalTheme.color + '; }.b { color: ' + newTheme.color + '; }');
    (0, _expect2.default)(wrapper.find('div').prop('className')).toBe('b');
  });

  it('should inject props.theme into a component that uses withTheme hoc', function () {
    var originalTheme = { color: 'black' };

    var MyDiv = function MyDiv(_ref2) {
      var theme = _ref2.theme;
      return _react2.default.createElement(
        'div',
        null,
        theme.color
      );
    };
    var MyDivWithTheme = (0, _withTheme2.default)(MyDiv);

    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _ThemeProvider2.default,
      { theme: originalTheme },
      _react2.default.createElement(MyDivWithTheme, null)
    ));

    (0, _expect2.default)(wrapper.find('div').text()).toBe('black');
  });

  it('should properly update theme prop on hoc component when theme is changed', function () {
    var MyDiv = function MyDiv(_ref3) {
      var theme = _ref3.theme;
      return _react2.default.createElement(
        'div',
        null,
        theme.color
      );
    };
    var MyDivWithTheme = (0, _withTheme2.default)(MyDiv);

    var originalTheme = { color: 'black' };
    var newTheme = { color: 'blue' };

    var Theme = function Theme(_ref4) {
      var theme = _ref4.theme;
      return _react2.default.createElement(
        _ThemeProvider2.default,
        { theme: theme },
        _react2.default.createElement(MyDivWithTheme, null)
      );
    };

    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(Theme, { theme: originalTheme }));

    (0, _expect2.default)(wrapper.find('div').text()).toBe('black');

    // Change theme
    wrapper.setProps({ theme: newTheme });

    (0, _expect2.default)(wrapper.find('div').text()).toBe('blue');
  });

  // https://github.com/styled-components/styled-components/issues/445
  it('should use ThemeProvider theme instead of defaultProps theme after initial render', function () {
    var Text = styled.div(_templateObject, function (props) {
      return props.theme.color;
    });

    Text.defaultProps = {
      theme: {
        color: 'purple'
      }
    };

    var Theme = function Theme(_ref5) {
      var props = _ref5.props;
      return _react2.default.createElement(
        _ThemeProvider2.default,
        { theme: { color: 'green' } },
        _react2.default.createElement(Text, props)
      );
    };

    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(Theme, { prop: 'foo' }));

    (0, _utils.expectCSSMatches)('.a { color: green; }');

    wrapper.setProps({ prop: 'bar' });

    (0, _utils.expectCSSMatches)('.a { color: green; }');
  });
});