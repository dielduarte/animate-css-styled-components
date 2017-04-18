'use strict';

var _templateObject = _taggedTemplateLiteral(['\n        ', '\n      '], ['\n        ', '\n      ']),
    _templateObject2 = _taggedTemplateLiteral(['\n        ', '\n        ', '\n      '], ['\n        ', '\n        ', '\n      ']),
    _templateObject3 = _taggedTemplateLiteral(['\n      ', '\n    '], ['\n      ', '\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styled = void 0;

describe('with styles', function () {
  /**
   * Make sure the setup is the same for every test
   */
  beforeEach(function () {
    styled = (0, _utils.resetStyled)();
  });

  it('should append a style', function () {
    var rule = 'color: blue;';
    var Comp = styled.div(_templateObject, rule);
    (0, _enzyme.shallow)(_react2.default.createElement(Comp, null));
    (0, _utils.expectCSSMatches)('.a { color: blue; }');
  });

  it('should append multiple styles', function () {
    var rule1 = 'color: blue;';
    var rule2 = 'background: red;';
    var Comp = styled.div(_templateObject2, rule1, rule2);
    (0, _enzyme.shallow)(_react2.default.createElement(Comp, null));
    (0, _utils.expectCSSMatches)('.a { color: blue; background: red; }');
  });

  it('should handle inline style objects', function () {
    var rule1 = {
      backgroundColor: 'blue'
    };
    var Comp = styled.div(_templateObject, rule1);
    (0, _enzyme.shallow)(_react2.default.createElement(Comp, null));
    (0, _utils.expectCSSMatches)('.a { background-color: blue; }');
  });

  it('should handle inline style objects with media queries', function () {
    var rule1 = {
      backgroundColor: 'blue',
      '@media screen and (min-width: 250px)': {
        backgroundColor: 'red'
      }
    };
    var Comp = styled.div(_templateObject, rule1);
    (0, _enzyme.shallow)(_react2.default.createElement(Comp, null));
    (0, _utils.expectCSSMatches)('.a { background-color: blue; } @media screen and (min-width: 250px) { .a { background-color: red; } }');
  });

  it('should handle inline style objects with pseudo selectors', function () {
    var rule1 = {
      backgroundColor: 'blue',
      '&:hover': {
        textDecoration: 'underline'
      }
    };
    var Comp = styled.div(_templateObject3, rule1);
    (0, _enzyme.shallow)(_react2.default.createElement(Comp, null));
    (0, _utils.expectCSSMatches)('.a { background-color: blue; } .a:hover { text-decoration: underline; }');
  });

  it('should handle inline style objects with pseudo selectors', function () {
    var rule1 = {
      backgroundColor: 'blue',
      '&:hover': {
        textDecoration: 'underline'
      }
    };
    var Comp = styled.div(_templateObject3, rule1);
    (0, _enzyme.shallow)(_react2.default.createElement(Comp, null));
    (0, _utils.expectCSSMatches)('.a { background-color: blue; } .a:hover { text-decoration: underline; }');
  });

  it('should handle inline style objects with nesting', function () {
    var rule1 = {
      backgroundColor: 'blue',
      '> h1': {
        color: 'white'
      }
    };
    var Comp = styled.div(_templateObject3, rule1);
    (0, _enzyme.shallow)(_react2.default.createElement(Comp, null));
    (0, _utils.expectCSSMatches)('.a { background-color: blue; } .a > h1 { color: white; }');
  });

  it('should handle inline style objects with contextual selectors', function () {
    var rule1 = {
      backgroundColor: 'blue',
      'html.something &': {
        color: 'white'
      }
    };
    var Comp = styled.div(_templateObject3, rule1);
    (0, _enzyme.shallow)(_react2.default.createElement(Comp, null));
    (0, _utils.expectCSSMatches)('.a { background-color: blue; } html.something .a { color: white; }');
  });

  it('should inject styles of multiple components', function () {
    var firstRule = 'background: blue;';
    var secondRule = 'background: red;';
    var FirstComp = styled.div(_templateObject, firstRule);
    var SecondComp = styled.div(_templateObject, secondRule);

    (0, _enzyme.shallow)(_react2.default.createElement(FirstComp, null));
    (0, _enzyme.shallow)(_react2.default.createElement(SecondComp, null));

    (0, _utils.expectCSSMatches)('.a { background: blue; } .b { background: red; }');
  });

  it('should inject styles of multiple components based on creation, not rendering order', function () {
    var firstRule = 'content: "first rule";';
    var secondRule = 'content: "second rule";';
    var FirstComp = styled.div(_templateObject, firstRule);
    var SecondComp = styled.div(_templateObject, secondRule);

    // Switch rendering order, shouldn't change injection order
    (0, _enzyme.shallow)(_react2.default.createElement(SecondComp, null));
    (0, _enzyme.shallow)(_react2.default.createElement(FirstComp, null));

    // Classes _do_ get generated in the order of rendering but that's ok
    (0, _utils.expectCSSMatches)('\n        .b { content: "first rule"; }\n        .a { content: "second rule"; }\n      ');
  });

  it('should strip a JS-style (invalid) comment in the styles', function () {
    var comment = '// This is an invalid comment';
    var rule = 'color: blue;';
    var Comp = styled.div(_templateObject2, comment, rule);
    (0, _enzyme.shallow)(_react2.default.createElement(Comp, null));
    (0, _utils.expectCSSMatches)('\n        .a {\n          color: blue;\n        }\n      ');
  });
});