const express = require('express');
const bodyParser = require('body-parser');
const { render } = require('express/lib/response');

const app = express();
const expressPort = 3000;
const socketPort = 5000;

// Criando um servidor http
const socketIoServer = require('http').createServer();

// importa e executa o socket.io
const io = require('socket.io')(socketIoServer, {
  cors: {
    origin: `http://localhost:${expressPort}`, // permitir dessa origem
    methods: ['GET', 'POST'] // Liberar acesso para
  }
});

const news = [];

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

io.on('connection', (socket) => {
  console.log(`O ${socket.id} acabou de se conectar`);

  socket.emit('news', news);
  socket.on('disconnect', () => console.log(`${socket.id} acabou de se desconectar`));
});

app.get('/news', (req, res) => res.render('news'));

app.post('/news', (req, res) => {
  const { title, message } = req.body;

  if(!title || !message) return res.status(422).json({ message: 'Falta um campo' });

  // io.emit('abc') // estou emitindo para abc
  // io.on('abc') // todo mundo que estiver escultando 'abc' vai receber a mensagem do emit

  io.emit('notification', { title, message }); // emite mensagens para as conexões
  news.push({ title, message });

  return res.status(201).json({ message: 'Deu tudo certo' });
});
app.listen(expressPort, () => console.log(`Express app listening on port ${expressPort}!`));

socketIoServer.listen(socketPort, () => console.log(`Socket app listening on port ${socketPort}!`))