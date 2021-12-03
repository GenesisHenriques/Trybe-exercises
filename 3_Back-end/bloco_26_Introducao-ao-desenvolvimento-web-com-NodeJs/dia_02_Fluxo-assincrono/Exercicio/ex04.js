const fs = require('fs').promises;

// 1 Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .

// fs.readFile('./simpsons.json', 'utf-8')
//   .then((arquivos) => {
//     return JSON.parse(arquivos);
//   })
//   .then((simpsons) => {
//     return simpsons.map(({ id, name }) => `${id} - ${name}`)
//   })
//   .then((string) => {
//     string.forEach((string) => console.log(string))
//   })

// 2 Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

// async function buscaPersonagem(id) {
//   const simpsons = await fs
//     .readFile('./simpsons.json', 'utf-8')
//     .then((personagem) => JSON.parse(personagem))

//   const simpsonEscolhido = simpsons.find((simpson) => simpson.id === id);

//   if(!simpsonEscolhido) {
//     throw new Error('id não encontrado');
//   }
//   return simpsonEscolhido;
// }
// buscaPersonagem(1);

// module.exports = buscaPersonagem;

// 3 Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

// async function eliminandoSimpsons() {
//   const simpsons = await fs
//   .readFile('./simpsons.json', 'utf-8')
//   .then((personagens) => JSON.parse(personagens))

//   const arrayFiltrado = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6')
//   await fs.writeFile('./simpsons.json', JSON.stringify(arrayFiltrado))
// };

// eliminandoSimpsons();

// module.exports = eliminandoSimpsons;

// 4 Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.

// async function familiaSimpson() {
//   const simpsons = await fs
//   .readFile('./simpsons.json', 'utf-8')
//   .then((personagens) => JSON.parse(personagens))

//   const arrayFiltrado = simpsons.filter((simpson) => simpson.id <= '4')
//   await fs.writeFile('./simpsonFamily.json', JSON.stringify(arrayFiltrado))
// };

// familiaSimpson();

// module.exports = familiaSimpson;

// 5 Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .

// async function atualizafamiliaSimpson() {
//     const simpsons = await fs
//     .readFile('./simpsonFamily.json', 'utf-8')
//     .then((personagens) => JSON.parse(personagens))
  
//     const newFamily = [...simpsons, { id: '5', name: 'Nelson Muntz' }]
//     await fs.writeFile('./simpsonFamily.json', JSON.stringify(newFamily))
//   };
  
//   atualizafamiliaSimpson();
  
//   module.exports = atualizafamiliaSimpson;

  // 6 Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .

  async function atualizafamiliaSimpson() {
    const simpsons = await fs
    .readFile('./simpsonFamily.json', 'utf-8')
    .then((personagens) => JSON.parse(personagens))
    .then((simpsons) => simpsons.filter((simpson) => simpson.id !== '5'))
    .then((family) => family.concat({ id: '5', name: 'Maggie Simpson' }))

    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsons))
  };
  
  atualizafamiliaSimpson();
  
  module.exports = atualizafamiliaSimpson;