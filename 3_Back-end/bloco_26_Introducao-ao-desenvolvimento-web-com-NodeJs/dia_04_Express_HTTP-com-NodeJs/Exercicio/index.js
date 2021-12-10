const express = require('express');
const bodyParser = require('body-parser');

const ping = require('./estruturas/ping');
const hello = require('./estruturas/hello');
const greetings = require('./estruturas/greetings');
const users = require('./estruturas/users');
const getSimpsons = require('./estruturas/getSimpsons');
const postSimpsons = require('./estruturas/postSimpsons')

const app = express();
app.use(bodyParser.json());

// inicio------middlewaree-------------
app.post('/greetings', greetings);
app.get('/ping', ping);
app.post('/hello', hello);
app.put('/users/:name/:age', users);
app.get('/simpsons/:id', getSimpsons),
app.post('/simpsons', postSimpsons);

// fim---------middlewaree-------------

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});
app.listen(3000, () => { console.log('Aplicação ouvindo na rota 3000') });

