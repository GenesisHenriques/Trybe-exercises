function doMath(n1, n2, n3) {
  return new Promise((resolve, reject) => {
    if (typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number')
    reject(`Informe apenas números`);

    const sum = (n1 + n2) * n3;

    sum < 50 ? reject('Valor muito baixo') : resolve(sum);
  });
};

function randomNumber() {
  return Math.floor(Math.random() * 100 + 1)
};


async function main() {
  const nums = Array.from({ length: 3 }).map(randomNumber);

  try {
    const result = await doMath(...nums)
    console.log(result);
  } catch(err) {
    console.error(err);
  }
};

main();

module.exports = main;