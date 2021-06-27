const assert = require('assert');

const sumAllNumbers = (numbers) => {
  let total = 0;
  for (const key in numbers) {
    total += numbers[key];
  }
  return total;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);