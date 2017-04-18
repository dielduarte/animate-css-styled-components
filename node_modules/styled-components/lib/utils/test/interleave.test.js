'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _interleave = require('../interleave');

var _interleave2 = _interopRequireDefault(_interleave);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('interleave', function () {
  it('blindly interleave', function () {
    (0, _expect2.default)((0, _interleave2.default)([], [])).toEqual([undefined]);
    (0, _expect2.default)((0, _interleave2.default)(['foo'], [])).toEqual(['foo']);
    (0, _expect2.default)((0, _interleave2.default)(['foo'], [1])).toEqual(['foo', 1, undefined]);
    (0, _expect2.default)((0, _interleave2.default)(['foo', 'bar'], [1])).toEqual(['foo', 1, 'bar']);
  });
  it('should be driven off the number of interpolations', function () {
    (0, _expect2.default)((0, _interleave2.default)(['foo', 'bar'], [])).toEqual(['foo']);
    (0, _expect2.default)((0, _interleave2.default)(['foo', 'bar', 'baz'], [1])).toEqual(['foo', 1, 'bar']);
    (0, _expect2.default)((0, _interleave2.default)([], [1])).toEqual([undefined, 1, undefined]);
    (0, _expect2.default)((0, _interleave2.default)(['foo'], [1, 2, 3])).toEqual(['foo', 1, undefined, 2, undefined, 3, undefined]);
  });
});