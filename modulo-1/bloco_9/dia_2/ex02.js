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
  .then((sun) => console.log(`valor: ${sun} - Promise resolvida`))
  .catch((sun) => console.log(`valor: ${sun} - Promise rejeitada`));
}

fetchPromise();
