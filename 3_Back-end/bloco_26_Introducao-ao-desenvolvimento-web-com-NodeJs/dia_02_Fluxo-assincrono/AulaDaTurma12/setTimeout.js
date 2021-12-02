const setTimeoutPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 3000);
  })
};

async function main() {
  await setTimeoutPromise();
  console.log('Time passed.');
  console.log("End of main");
};

main();

modulo.export = setTimeoutPromise;