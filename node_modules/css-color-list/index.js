'use strict';

var cssColorNames = require('css-color-names');

module.exports = function cssColorList() {
  return Object.keys(cssColorNames);
}
