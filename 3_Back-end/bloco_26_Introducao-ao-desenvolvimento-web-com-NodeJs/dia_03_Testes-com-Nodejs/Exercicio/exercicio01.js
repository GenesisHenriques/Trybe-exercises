// Exercício 1 : Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":
// Essa função irá receber um número como parâmetro e retornar uma string como resposta;
// Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";
// Descreva todos os cenário de teste utilizando describes ;
// Descreva todos os testes que serão feitos utilizando its ;
// Crie as asserções validando se os retornos de cada cenário tem o tipo e o valor esperado.

const fs = require('fs').promises;
const readline = require('readline-sync');

const positivoNegativo = (num) => {
  if (typeof num !== 'number') return 'o valor deve ser um número';
  if (num === 0) return 'Neutro'
  if (num < 0) return 'Negativo'
  if (num > 0) return 'Positivo'
};

positivoNegativo(5);

module.exports = positivoNegativo;