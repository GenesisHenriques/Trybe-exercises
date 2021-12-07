const fs = require('fs').promises;
const readline = require('readline-sync')

// 6 Crie um script que mostre na tela o conteúdo de um arquivo escolhido pelo usuário:

async function mostrarConteudo() {

  const arquivo = await readline.questionInt('Qual arquivo você deseja ler (de 1 a 5)?\n')

  const texto = fs.readFile(`file${arquivo}.txt`, 'utf-8')
    .then((a) => console.log(a))
    .catch((err) => console.log('DEU BOSTA'))
}

mostrarConteudo();

module.exports = mostrarConteudo;