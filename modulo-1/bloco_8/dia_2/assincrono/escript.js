// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const showEmailList = (email) => {
//   console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };

// emailListInData.forEach((index) => {
//   showEmailList(index);
// }); 

// ---------------------------------

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = (num) => {
//   return num.find((index) => index % 3 === 0 && index % 5 === 0);
// }

// console.log(findDivisibleBy3And5(numbers))

// ---------------------------------


// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = (num) => {
//   return num.find((index) => index.length === 5);
// }

// console.log(findNameWithFiveLetters(names));

// Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  return musicas.find((value) => {
    return value.id === id;
  });
}

// ou 

function findMusic(id) {
  return musicas.find((value) => value.id === id);
}

console.log(findMusic('31031685'))