const fs = require('fs').promises;
const readline = require('readline-sync');

const squareArea = () => {
  const num = readline.questionInt('Qual o valor do lado?\n');

  if(num < 0) {
    throw Error('Valor invalido')
  }
  return Math.pow(side, 2);
};

squareArea();

module.exports = squareArea;