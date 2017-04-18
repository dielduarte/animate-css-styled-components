'use strict';

var _generateAlphabeticName = require('../generateAlphabeticName');

var _generateAlphabeticName2 = _interopRequireDefault(_generateAlphabeticName);

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('generateAlphabeticName', function () {
  it('should create alphabetic names for number input data', function () {
    (0, _expect2.default)((0, _generateAlphabeticName2.default)(1000000000)).toEqual('cGNYzm');
    (0, _expect2.default)((0, _generateAlphabeticName2.default)(2000000000)).toEqual('fnBWYy');
  });
});