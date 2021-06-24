// const compareAnswers = () => rightAnswers.toString() === studentAnswers.toString();

// const conferirRespostas = (rightAnswers, studentAnswers, compareAnswers) => {
//   if(compareAnswers === true) {
//     return 'Foi';
//   }
//   return 'Não foi';
// }

// const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// console.log(conferirRespostas(rightAnswers, studentAnswers, compareAnswers()));

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (a, b, check) => {

  return `Total de pontos: ${check(a,b)}`;
}

const check = (a, b) => {
  let points = 0;
  for (let index = 0; index < a.length; index += 1) {
    if (a[index] !== b[index]) {
      points -= 0.5;
    } 
    points += 1;
  }
  return points;
}

console.log(checkAnswers(rightAnswers, studentAnswers, check));
