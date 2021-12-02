async function main(p1, p2, p3) {
  const promise = new Promise((resolve, reject) => {
    let sumPar = 0;

    if ((typeof(p1) !== 'number') || (typeof(p2) !== 'number') || (typeof(p3) !== 'number')) {
      reject(new Error('Informe apenas números'))
    } else {
      sumPar = (p1 + p2) * p3;
      sumPar > 50 ? resolve(sumPar) : reject(new Error('Valor muito baixo'))
    }
  })
};

main(50, 1, 1);