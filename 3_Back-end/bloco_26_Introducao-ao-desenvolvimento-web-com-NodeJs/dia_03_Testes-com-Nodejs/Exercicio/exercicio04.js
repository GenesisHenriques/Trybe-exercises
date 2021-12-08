const fs = require('fs').promises;
const readline = require('readline-sync');


const escreveConteudo = async (arquivo, conteudo) => {
  try {
    fs.writeFile(arquivo, conteudo, { flag: 'w' })
    return 'ok'
  } catch (error) {
    console.log('Deu um erro');
  }
};

escreveConteudo('test.txt', 'Genesis');

module.exports = escreveConteudo;
