// Fazendo com callback

// const fs = require('fs');

// const dados = fs.readFile('./teste.txt', 'utf-8', (err, dado) => {
//   if(err) return console.log(`Erro: ${err}`)
//   console.log(dado);
// })

// Fazendo com promise ----------------------------------------------------------------------

// const fs = require('fs').promises;
// const util = require('util')

// // Transformando uma funçao que retirna uma callback em uma função que retorna uma promise
// // Com then catch - Assincrona
// fs.readFile('./teste.txt', 'utf-8')
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err.message))


// Pegando erros com uma função sincrona ----------------------------------------------------

// function soma() {
//   return 3 + 5;
// }

// try {
//   console.log(soma());
// } catch (error) {
//   console.log(error);
// }

// Pegando erros com try catch assincrono------------------------------------------------------

// function dividirNumeros(num1, num2) {
//   const promise = new Promise((resolve, reject) => {
//     if (num2 == 0) reject(new Error("Não pode ser feito uma divisão por zero"));

//     const resultado = num1 / num2;
//     resolve(resultado)
//   });

//   return promise;
// }

// dividirNumeros(2, 1)
//   .then(result => console.log(`sucesso: ${result}`))
//   .catch(err => console.log(`erro: ${err.message}`));


// Lendo arquivos com métodos síncronos----------------------------------------------------

// const fs = require('fs');

// const nomeDoArquivo = 'meu-arquivo.txt';

// try {
//   const data = fs.readFileSync(nomeDoArquivo, 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error(`Erro ao ler o arquivo: ${err.path}`);
//   console.log(err);
// }

// Lendo arquivos com métodos assíncronos------------------------------------------

// const fs = require('fs').promises;

// const nomeDoArquivo = 'meu-arquivo.txt';

// fs.readFile(nomeDoArquivo, 'utf8')
//   .then((data) => {
//     console.log(`Conteúdo do arquivo: ${data}`);
//   })
//   .catch((err) => {
//     console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
//     process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
//   });

  // Escrevendo dados em arquivos---------------------------------------------------------

//   const fs = require('fs').promises;

// fs.writeFile('./meu-arquivo.txt', 'Meu textão')
//   .then(() => {
//     console.log('Arquivo escrito com sucesso!');
//   })
//   .catch((err) => {
//     console.error(`Erro ao escrever o arquivo: ${err.message}`);
//   });

  // Utilizando async/await-------------------------------------------------

  const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main()

//Rodando promessas simultaneamente com Promise.all---------------------------------

const fs = require('fs').promises;

Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt'),
])
  .then(([file1, file2, file3]) => {
    const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivos: ${err.message}`);
  });