var assert = require('assert');
var cssColorList = require('..');

describe('css-color-list', function() {

  it('should include css colors', function() {
    ['silver', 'rebeccapurple', 'tomato'].forEach(function(color) {
      assert.ok(cssColorList().indexOf(color) != -1);
    });
  });

  it('should not include unofficial colors', function() {
    ['puke', 'foo'].forEach(function(color) {
      assert.ok(cssColorList().indexOf(color) == -1);
    });
  });
});
