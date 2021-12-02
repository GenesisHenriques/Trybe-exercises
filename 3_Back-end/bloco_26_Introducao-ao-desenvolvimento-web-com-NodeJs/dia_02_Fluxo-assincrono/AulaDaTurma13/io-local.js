const fs = require('fs'); // "Baixa" o fs

const nomeDoArquivo = 'meu-arquivo.txt';

try {
  const data = fs.readFileSync(nomeDoArquivo, 'utf8')
}