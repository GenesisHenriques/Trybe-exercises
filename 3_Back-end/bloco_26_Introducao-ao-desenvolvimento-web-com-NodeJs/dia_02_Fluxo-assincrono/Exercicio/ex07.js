// 7 Crie um script que substitua uma palavra por outra em um arquivo escolhido pela pessoa usuária:

const fs = require('fs').promises;
const readline = require('readline-sync')

async function substituiPalavra() {

  const arquivo = await readline.questionInt('Qual o numero do arquivo? entre 1 e 5\n');

  const res = await fs.readFile(`file${arquivo}.txt`, 'utf-8')
    .catch((err) => {
      console.error(err);
    })

  if(res !== null) {
    const antigaPalavra = await readline.question('Qual palavra você deseja substituir?\n');
    const novaPalavra = await readline.question('Qual a nova palavra?\n');

    const novoArquivo = await res.replace(antigaPalavra, novaPalavra)
    
    const destino = await readline.question('Qual arquivo de destino? de 1 a 5\n');

    await fs.writeFile(`file${destino}.txt`, novoArquivo)
  }
}

substituiPalavra();

module.exports = substituiPalavra;