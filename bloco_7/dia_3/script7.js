const assert = require('assert');

const wordLengths = (words) => {
  let output = [];

  for (const key in words) {
    output.push(words[key].length);
  }
  return output;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);