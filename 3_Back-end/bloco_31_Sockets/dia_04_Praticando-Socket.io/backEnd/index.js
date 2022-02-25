const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http').createServer(app);

const LanguageController = require('./controllers/languageController');

// instanciado na linha 1
// const app = express();

const io = require('socket.io')(http, { // 1 parametro - servidor, 2 parametro config de privacidade;
  cors: {
    origin: 'http://localhost:3000', // origem do frontEnd que ele permite o acesso
    methods: ['POST', 'GET']
  }
})
require('./sockets/votes')(io); // passa o IO como dependencia para o socket/votes

const port = 3002;
app.use(bodyParser.json());
app.use(cors()); // libera que uma app acesse a outra - front para o back

app.use('/languages', LanguageController);


http.listen(port, () => console.log(`Example app listening on port ${port}!`));