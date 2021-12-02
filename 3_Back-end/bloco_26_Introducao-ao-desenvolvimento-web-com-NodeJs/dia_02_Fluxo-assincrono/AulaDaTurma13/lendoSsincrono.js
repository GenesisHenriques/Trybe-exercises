const fs = require('fs'); // "Baixa" o fs

const nomeDoArquivo = 'meu-arquivo.txt';

try {
  const data = fs.readFileSync(nomeDoArquivo, 'utf8');
  console.log(data);
} catch {
  console.erro(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}