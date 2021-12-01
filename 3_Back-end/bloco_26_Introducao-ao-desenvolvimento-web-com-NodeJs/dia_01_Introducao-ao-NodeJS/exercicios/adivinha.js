const readline = require('readline-sync');

const numeroAleatorio = () => {
  return parseInt(Math.random() * 10);
};

const numeroDoUsuario = () => {
  const num = readline.questionInt('Escolha um numero entre 1 e 10\n');
  return num;
};

const main = () => {
  const numUsuario = numeroDoUsuario();
  const numAleatorio = numeroAleatorio();

  numUsuario === numAleatorio ?
  console.log("Parabéns, você acertou!!") :
  console.log("Não foi dessa vez, você errou!");
  // console.log(numeroAleatorio());
};

main();