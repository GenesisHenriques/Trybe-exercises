// 8 Escreva uma função que receba um número inteiro maior que 0 e retorne uma Promise.
// 9 Se o número for múltiplo de 3, resolva a Promise com o valor "Fizz".
// 10 Se o número for múltiplo de 5, resolva a Promise com o valor "Buzz".
// 11 Se o número for múltiplo de 3 e 5, resolva a Promise com o valor "FizzBuzz".
// 12 Caso contrário, rejeite a Promise com o valor do número.

const fs = require('fs').promises;
const readline = require('readline-sync')

async function fizzBuzz(num) {
  return new Promise((reject, resolve) => {
    if(num <= 0) reject('Numero menor ou igual a zero')
    if(num % 3 === 0 && num % 5 === 0) resolve('FizzBuzz')
    if(num % 3 === 0) resolve('Fizz')
    if(num % 5 === 0) resolve('Buzz')
    reject(num)
  })
}

fizzBuzz(10)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))

module.exports = fizzBuzz;
