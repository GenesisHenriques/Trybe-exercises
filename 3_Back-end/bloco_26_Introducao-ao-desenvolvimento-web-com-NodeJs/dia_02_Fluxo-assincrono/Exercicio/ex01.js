// async function main(p1, p2, p3) {
//   const promise = new Promise((resolve, reject) => {
//     let sumPar = 0;

//     if ((typeof(p1) !== 'number') || (typeof(p2) !== 'number') || (typeof(p3) !== 'number')) {
//       reject(new Error('Informe apenas números'))
//     } else {
//       sumPar = (p1 + p2) * p3;
//       sumPar > 50 ? resolve(sumPar) : reject(new Error('Valor muito baixo'))
//     }
//   })
// };

// main(50, 1, 1);

// modulo.export = main;

// GABARITO

function doMath(n1, n2, n3) {
  return new Promise((resolve, reject) => {
    if (typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number')
    reject(`Informe apenas números`);

    const sum = (n1 + n2) * n3;

    sum < 50 ? reject('Valor muito baixo') : resolve(sum);
  });
};

doMath(10,10,10)
  .then(resolve => console.log(resolve))
  .catch((error) => console.log(err))

module.exports = doMath;