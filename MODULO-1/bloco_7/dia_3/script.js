// const assert = require('assert');

// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }

//   return a + b;
// }

// assert.strictEqual(sum(4, 5), 9);
// assert.strictEqual(sum(0, 0), 0);
// assert.strictEqual(sum(4, '5'), 9, 'Erro, tem alguma string ai');

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
//Verifique se o array passado por parâmetro não sofreu alterações
//assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);

