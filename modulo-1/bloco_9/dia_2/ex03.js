const returnSun = (sun) => {
  let arr = [];
  arr.push(sun / 2);
  arr.push(sun / 3);
  arr.push(sun / 5);
  arr.push(sun / 10);
};

const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      {length: 10},
      () => Math.floor(Math.random() * 50) + 1,
    );

    const sun = myArray.map((number) => number * number)
    .reduce((acc, value) => acc + value);

    sun < 8000 ? resolve(sun) : reject(sun);
  });

  myPromise
  .then((sun) => console.log([2,3,5,10].map((value) => sun / value)))
  .catch((sun) => console.log(`valor: ${sun} - Promise rejeitada`));
}

fetchPromise();
