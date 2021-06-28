// const assortedNumber = () => Math.floor(Math.random() * 10);

// const drawResult = (chosenNumbet, assortedNumber) => {
//   if (chosenNumbet === assortedNumber) {
//     return 'Parabéns você ganhou';
//   }
//   return 'Tente novamente';
// }

// console.log(drawResult(5, assortedNumber()));

const assortedNumber = () => Math.floor(Math.random() * 10);

const drawResult = (chosenNumbet, assortedNumber) => {
  
  return (chosenNumbet === assortedNumber) ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(drawResult(5, assortedNumber()));
