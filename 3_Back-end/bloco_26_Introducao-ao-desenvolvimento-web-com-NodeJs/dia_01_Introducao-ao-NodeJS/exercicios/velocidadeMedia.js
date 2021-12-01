const readline = require('readline-sync');

const calculoDaVelocidade = () => {
  const distancia = readline.questionInt('Qual a distância percorrida em metros?\n');
  const tempo = readline.questionInt('E qual o tempo gasto em segundos?\n');
  return distancia / tempo;
};

const main = () => {
  console.log(`A velocidade do carro foi de ${calculoDaVelocidade().toFixed(2)} m/s`);
};

main();