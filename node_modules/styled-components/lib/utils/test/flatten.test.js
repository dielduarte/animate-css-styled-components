'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _flatten = require('../flatten');

var _flatten2 = _interopRequireDefault(_flatten);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

describe('flatten', function () {
  it('doesnt merge strings', function () {
    (0, _expect2.default)((0, _flatten2.default)(['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz']);
  });
  it('drops nulls', function () {
    // $FlowInvalidInputTest
    (0, _expect2.default)((0, _flatten2.default)(['foo', false, 'bar', undefined, 'baz', null])).toEqual(['foo', 'bar', 'baz']);
  });
  it('doesnt drop any numbers', function () {
    (0, _expect2.default)((0, _flatten2.default)(['foo', 0, 'bar', NaN, 'baz', -1])).toEqual(['foo', '0', 'bar', 'NaN', 'baz', '-1']);
  });
  it('toStrings everything', function () {
    // $FlowInvalidInputTest
    (0, _expect2.default)((0, _flatten2.default)([1, true])).toEqual(['1', 'true']);
  });
  it('hypenates objects', function () {
    var obj = {
      fontSize: '14px',
      WebkitFilter: 'blur(2px)'
    };
    var css = 'font-size: 14px; -webkit-filter: blur(2px);';
    // $FlowFixMe
    (0, _expect2.default)((0, _flatten2.default)([obj])).toEqual([css]);
    // $FlowFixMe
    (0, _expect2.default)((0, _flatten2.default)(['some:thing;', obj, 'something: else;'])).toEqual(['some:thing;', css, 'something: else;']);
  });
  it('handles nested objects', function () {
    var obj = {
      fontSize: '14px',
      '@media screen and (min-width: 250px)': {
        fontSize: '16px'
      },
      '&:hover': {
        fontWeight: 'bold'
      }
    };
    var css = 'font-size: 14px; @media screen and (min-width: 250px) {\n  font-size: 16px;\n} &:hover {\n  font-weight: bold;\n}';
    // $FlowFixMe
    (0, _expect2.default)((0, _flatten2.default)([obj])).toEqual([css]);
    // $FlowFixMe
    (0, _expect2.default)((0, _flatten2.default)(['some:thing;', obj, 'something: else;'])).toEqual(['some:thing;', css, 'something: else;']);
  });
  it('toStrings class instances', function () {
    var SomeClass = function () {
      function SomeClass() {
        _classCallCheck(this, SomeClass);
      }

      _createClass(SomeClass, [{
        key: 'toString',
        value: function toString() {
          return 'some: thing;';
        }
      }]);

      return SomeClass;
    }();
    // $FlowFixMe


    (0, _expect2.default)((0, _flatten2.default)([new SomeClass()])).toEqual(['some: thing;']);
  });
  it('flattens subarrays', function () {
    // $FlowFixMe
    (0, _expect2.default)((0, _flatten2.default)([1, 2, [3, 4, 5], 'come:on;', 'lets:ride;'])).toEqual(['1', '2', '3', '4', '5', 'come:on;', 'lets:ride;']);
  });
  it('defers functions', function () {
    var func = function func() {
      return 'bar';
    };
    // $FlowFixMe
    var funcWFunc = function funcWFunc() {
      return ['static', function (subfunc) {
        return subfunc ? 'bar' : 'baz';
      }];
    };
    (0, _expect2.default)((0, _flatten2.default)(['foo', func, 'baz'])).toEqual(['foo', func, 'baz']);
    (0, _expect2.default)((0, _flatten2.default)(['foo', funcWFunc, 'baz'])).toEqual(['foo', funcWFunc, 'baz']);
  });
  it('executes functions', function () {
    var func = function func() {
      return 'bar';
    };
    (0, _expect2.default)((0, _flatten2.default)(['foo', func, 'baz'], { bool: true })).toEqual(['foo', 'bar', 'baz']);
  });
  it('passes values to function', function () {
    var func = function func(_ref) {
      var bool = _ref.bool;
      return bool ? 'bar' : 'baz';
    };
    (0, _expect2.default)((0, _flatten2.default)(['foo', func], { bool: true })).toEqual(['foo', 'bar']);
    (0, _expect2.default)((0, _flatten2.default)(['foo', func], { bool: false })).toEqual(['foo', 'baz']);
  });
  it('recursively calls functions', function () {
    // $FlowFixMe
    var func = function func() {
      return ['static', function (_ref2) {
        var bool = _ref2.bool;
        return bool ? 'bar' : 'baz';
      }];
    };
    (0, _expect2.default)((0, _flatten2.default)(['foo', func], { bool: true })).toEqual(['foo', 'static', 'bar']);
    (0, _expect2.default)((0, _flatten2.default)(['foo', func], { bool: false })).toEqual(['foo', 'static', 'baz']);
  });
});