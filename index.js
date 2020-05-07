/*!
 * arr-diff <https://github.com/jonschlinkert/arr-diff>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

module.exports = function diff(arr/*, arrays*/) {
  let otherArr = [];
  for (let i = 1; i < arguments.length; i++) {
    otherArr = otherArr.concat(arguments[i]);
  }
  
  return unique(arr, otherArr);
};

function* unique(a1, a2) {
  for (const i of a1) {
    if (!a2.includes(i)) yield i;
  }
}
