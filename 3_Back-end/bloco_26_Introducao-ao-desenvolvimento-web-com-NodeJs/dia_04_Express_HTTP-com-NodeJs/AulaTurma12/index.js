const express = require('express');
const rescue = require('express-rescue');

const { read, create } = require('./controllers/names');
const helo = require('./controllers/helo');
const errorHandler = require('./middlewares/errorHandler');
const auth = require('./middlewares/auth'); // segurança

const app = express(); // Cria uma aplicação express

app.use(express.json())//

app.get('/secure/hello', auth, helo)
app.get('/hello', helo); // Criar um endPoint na rota "/hello" - roda callback quando estiver na rota "/hello"
app.get('/names', auth, read);

app.post('/names', auth, create);

app.use(errorHandler);

app.listen(3005, () => { // Coloca para rodar na porta 3005
  console.log('Online na porta 3005'); // Depois que ela rodar, ela vai executar o seguinte callback
});

