const readline = require('readline-sync');
let imc = 0;

const situacaoTabela = (imc) => {
  if (imc < 18.5) return "Abaixo do peso (magrelo)"
  else if (imc >= 18.5 && imc < 24.9) return "Peso normal"
  else if (imc >= 25 && imc < 29.9) return "Acima do peso (sobrepeso)"
  else if (imc >= 30 && imc < 34.9) return "Obesidade grau I"
  else if (imc >= 35 && imc < 39.9) return "Obesidade grau II"
  else if (imc > 40) return "Obesidade grau III e IV"
};

const calcularImc = () => {
  const altura = readline.questionFloat('Qual a sua altura\n');
  const peso = readline.questionFloat('Qual o seu peso?\n');

  imc = (peso / (altura * altura)).toFixed(2);
};

const main = () => {
  calcularImc();
    console.log(`Seu IMC é ${ imc }`);
  console.log(situacaoTabela(imc));
};

main();