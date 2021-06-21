// -------- 1 ----------

// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
// }
// testingScope(false);


// -------- 2 ----------

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// oddsAndEvens.sort((a, b) => a - b); 

// console.log(oddsAndEvens);

//

// -------- 3 ----------

// function fatorial (num) {
//   let resultado = num;
//   for (let index = num; index > 1; index -= 1) {
//     resultado *= (index - 1);
//   }
//   return resultado;
// }

// console.log(fatorial(10))

//  fatorial = (num) => {
//   let resultado = num;
//   for (let index = num; index > 1; index -= 1) {
//     resultado *= (index - 1);
//   }
//   return resultado;
// }

// console.log(fatorial(4))


// -------- 4 ----------

let frase = 'Ei, eu sou o Gênesis';

let tamanho = frase.split(' ');
let maior = '';

for (let index = 0; index < tamanho.length; index += 1) {
  if (tamanho[index].length > maior.length) {
    maior = tamanho[index];
  }
}

console.log(`A maior palavra na frase: ${frase} \nfoi: ${maior}`);