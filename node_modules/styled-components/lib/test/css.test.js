'use strict';

var _templateObject = _taggedTemplateLiteral(['\n      transition: opacity 0.3s;\n    '], ['\n      transition: opacity 0.3s;\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    '], ['\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n      margin-bottom: calc(15px - 0.5rem) !important;\n    '], ['\n      margin-bottom: calc(15px - 0.5rem) !important;\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n      --custom-prop: some-val;\n    '], ['\n      --custom-prop: some-val;\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styled = void 0;

describe('css features', function () {
  beforeEach(function () {
    styled = (0, _utils.resetStyled)();
  });

  it('should add vendor prefixes in the right order', function () {
    var Comp = styled.div(_templateObject);
    (0, _enzyme.shallow)(_react2.default.createElement(Comp, null));
    (0, _utils.expectCSSMatches)('.a { transition: opacity 0.3s; -webkit-transition: opacity 0.3s; }');
  });

  it('should add vendor prefixes for display', function () {
    var Comp = styled.div(_templateObject2);
    (0, _enzyme.shallow)(_react2.default.createElement(Comp, null));
    (0, _utils.expectCSSMatches)('\n      .a {\n        display: -webkit-box;\n        display: -moz-box;\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        flex-direction: column;\n        -webkit-box-direction: normal;\n        -webkit-box-orient: vertical;\n        -ms-flex-direction: column;\n        -webkit-flex-direction: column;\n        align-items: center;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n      }\n    ');
  });

  it('should handle CSS calc()', function () {
    var Comp = styled.div(_templateObject3);
    (0, _enzyme.shallow)(_react2.default.createElement(Comp, null));
    (0, _utils.expectCSSMatches)('\n      .a {\n        margin-bottom: -webkit-calc(15px - 0.5rem) !important;\n        margin-bottom: -moz-calc(15px - 0.5rem) !important;\n        margin-bottom: calc(15px - 0.5rem) !important;\n      }\n    ');
  });

  it('should pass through custom properties', function () {
    var Comp = styled.div(_templateObject4);
    (0, _enzyme.shallow)(_react2.default.createElement(Comp, null));
    (0, _utils.expectCSSMatches)('.a { --custom-prop: some-val; }');
  });
});