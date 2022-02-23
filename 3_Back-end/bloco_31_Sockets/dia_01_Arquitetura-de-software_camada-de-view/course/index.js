const express = require('express');
const bodyParser = require('body-parser');

const authorController = require('./controllers/authorController');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); // configura o express oara utilizar o EJS por padrão como template engine

app.set('views', './views'); // adiciona o diretorio /views a lista de diretorios em que o express vai procurar um arquivo com o nome especificado pelo metodo render - assim não precisa especificar o caminho completo do arquivo em todos os momentos.

app.get('/authors', authorController.listAuthors);

app.get('/authors/new', authorController.newAuthor);

app.get('/authors/:id', authorController.showAuthor);

app.post('/authors', authorController.createAuthor);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});