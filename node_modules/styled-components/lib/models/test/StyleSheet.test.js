'use strict';

var _StyleSheet = require('../StyleSheet');

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _utils = require('../../test/utils');

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('stylesheet', function () {
  beforeEach(function () {
    (0, _utils.resetStyled)();
  });

  describe('inject', function () {
    beforeEach(function () {
      _StyleSheet2.default.inject();
    });
    it('should inject the global sheet', function () {
      (0, _expect2.default)(_StyleSheet2.default.globalStyleSheet.injected).toBe(true);
    });
    it('should inject the component sheet', function () {
      (0, _expect2.default)(_StyleSheet2.default.componentStyleSheet.injected).toBe(true);
    });
    it('should specify that the sheets have been injected', function () {
      (0, _expect2.default)(_StyleSheet2.default.injected).toBe(true);
    });
  });

  describe('flush', function () {
    beforeEach(function () {
      _StyleSheet2.default.flush();
    });
    it('should flush the global sheet', function () {
      (0, _expect2.default)(_StyleSheet2.default.globalStyleSheet.injected).toBe(false);
    });
    it('should flush the component sheet', function () {
      (0, _expect2.default)(_StyleSheet2.default.componentStyleSheet.injected).toBe(false);
    });
    it('should specify that the sheets are no longer injected', function () {
      (0, _expect2.default)(_StyleSheet2.default.injected).toBe(false);
    });
  });

  it('should return both rules for both sheets', function () {
    _StyleSheet2.default.insert('a { color: green }', { global: true });
    _StyleSheet2.default.insert('.hash1234 { color: blue }');

    (0, _expect2.default)(_StyleSheet2.default.rules()).toEqual([{ cssText: 'a { color: green }' }, { cssText: '.hash1234 { color: blue }' }]);
  });

  describe('insert with the global option', function () {
    beforeEach(function () {
      _StyleSheet2.default.insert('a { color: green }', { global: true });
    });
    it('should insert into the global sheet', function () {
      (0, _expect2.default)(_StyleSheet2.default.globalStyleSheet.rules()).toEqual([{ cssText: 'a { color: green }' }]);
    });
    it('should not inject into the component sheet', function () {
      (0, _expect2.default)(_StyleSheet2.default.componentStyleSheet.rules()).toEqual([]);
    });
  });

  describe('insert without the global option', function () {
    beforeEach(function () {
      _StyleSheet2.default.insert('.hash1234 { color: blue }');
    });
    it('should inject into the component sheet', function () {
      (0, _expect2.default)(_StyleSheet2.default.componentStyleSheet.rules()).toEqual([{ cssText: '.hash1234 { color: blue }' }]);
    });
    it('should not inject into the global sheet', function () {
      (0, _expect2.default)(_StyleSheet2.default.globalStyleSheet.rules()).toEqual([]);
    });
  });
});