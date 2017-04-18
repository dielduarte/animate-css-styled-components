'use strict';

var _templateObject = _taggedTemplateLiteral([''], ['']),
    _templateObject2 = _taggedTemplateLiteral(['color: blue;'], ['color: blue;']),
    _templateObject3 = _taggedTemplateLiteral(['color: red;'], ['color: red;']),
    _templateObject4 = _taggedTemplateLiteral(['\n      color: blue;\n      > h1 { font-size: 4rem; }\n    '], ['\n      color: blue;\n      > h1 { font-size: 4rem; }\n    ']),
    _templateObject5 = _taggedTemplateLiteral(['\n      color: ', ';\n    '], ['\n      color: ', ';\n    ']),
    _templateObject6 = _taggedTemplateLiteral(['background-color: green;'], ['background-color: green;']),
    _templateObject7 = _taggedTemplateLiteral(['color: green;'], ['color: green;']),
    _templateObject8 = _taggedTemplateLiteral(['color:red;'], ['color:red;']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _enzyme = require('enzyme');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styled = void 0;

describe('extending', function () {
  /**
   * Make sure the setup is the same for every test
   */
  beforeEach(function () {
    styled = (0, _utils.resetStyled)();
  });

  it('should generate a single class with no styles', function () {
    var Parent = styled.div(_templateObject);
    var Child = styled(Parent)(_templateObject);

    (0, _enzyme.shallow)(_react2.default.createElement(Parent, null));
    (0, _enzyme.shallow)(_react2.default.createElement(Child, null));

    (0, _utils.expectCSSMatches)('.a { }');
  });

  it('should generate a single class if only parent has styles', function () {
    var Parent = styled.div(_templateObject2);
    var Child = styled(Parent)(_templateObject);

    (0, _enzyme.shallow)(_react2.default.createElement(Parent, null));
    (0, _enzyme.shallow)(_react2.default.createElement(Child, null));

    (0, _utils.expectCSSMatches)('.a { color: blue; }');
  });

  it('should generate a single class if only child has styles', function () {
    var Parent = styled.div(_templateObject2);
    var Child = styled(Parent)(_templateObject);

    (0, _enzyme.shallow)(_react2.default.createElement(Parent, null));
    (0, _enzyme.shallow)(_react2.default.createElement(Child, null));

    (0, _utils.expectCSSMatches)('.a { color: blue; }');
  });

  it('should generate a class for the child with the rules of the parent', function () {
    var Parent = styled.div(_templateObject2);
    var Child = styled(Parent)(_templateObject3);

    (0, _enzyme.shallow)(_react2.default.createElement(Child, null));

    (0, _utils.expectCSSMatches)('.a { color: blue;color: red; }');
  });

  it('should generate different classes for both parent and child', function () {
    var Parent = styled.div(_templateObject2);
    var Child = styled(Parent)(_templateObject3);

    (0, _enzyme.shallow)(_react2.default.createElement(Parent, null));
    (0, _enzyme.shallow)(_react2.default.createElement(Child, null));

    (0, _utils.expectCSSMatches)('.a { color: blue; } .b { color: blue;color: red; }');
  });

  it('should copy nested rules to the child', function () {
    var Parent = styled.div(_templateObject4);
    var Child = styled(Parent)(_templateObject3);

    (0, _enzyme.shallow)(_react2.default.createElement(Parent, null));
    (0, _enzyme.shallow)(_react2.default.createElement(Child, null));

    (0, _utils.expectCSSMatches)('\n      .a { color: blue; }\n      .a > h1 { font-size: 4rem; }\n      .b { color: blue; color: red; }\n      .b > h1 { font-size: 4rem; }\n    ');
  });

  it('should keep default props from parent', function () {
    var Parent = styled.div(_templateObject5, function (props) {
      return props.color;
    });
    Parent.defaultProps = {
      color: 'red'
    };

    var Child = styled(Parent)(_templateObject6);

    (0, _enzyme.shallow)(_react2.default.createElement(Parent, null));
    (0, _enzyme.shallow)(_react2.default.createElement(Child, null));

    (0, _utils.expectCSSMatches)('\n      .a { color: red; }\n      .b { color: red; background-color: green; }\n    ');
  });

  it('should keep prop types from parent', function () {
    var Parent = styled.div(_templateObject5, function (props) {
      return props.color;
    });
    Parent.propTypes = {
      color: _propTypes2.default.string
    };

    var Child = styled(Parent)(_templateObject6);

    (0, _expect2.default)(Child.propTypes).toEqual(Parent.propTypes);
  });

  it('should keep custom static member from parent', function () {
    var Parent = styled.div(_templateObject3);

    Parent.fetchData = function () {
      return 1;
    };

    var Child = styled(Parent)(_templateObject7);

    (0, _expect2.default)(Child.fetchData).toExist();
    (0, _expect2.default)(Child.fetchData()).toEqual(1);
  });

  it('should keep static member in triple inheritance', function () {
    var GrandParent = styled.div(_templateObject3);
    GrandParent.fetchData = function () {
      return 1;
    };

    var Parent = styled(GrandParent)(_templateObject3);
    var Child = styled(Parent)(_templateObject8);

    (0, _expect2.default)(Child.fetchData).toExist();
    (0, _expect2.default)(Child.fetchData()).toEqual(1);
  });
});