const express = require('express');
const path = require('path');
const uploadController = require('./controller/upload');
const uploadMiddleware = require('./middleware/upload');


const app = express()
app.use(express.static(path.resolve(__dirname, 'uploads'))); // questão de segurança - funciona sem
// _dirname ? nome do dirretorio do modulo - pega o caminho desde o C:
// path.resolve ? juntao _dirname com o 'uploads' - mesma coisa que _dirname + 'uploads', mas dessa for a gente fica suscetível a injeção de dados - injeção acontece em concatenação de strings

const port = process.env.PORT || 3000;

app.use(express.json());
app.post(
  '/files/upload',
  uploadMiddleware.single('file'), // Fala que vai receber 1 arquivo 'single' - e que ele vai vir do campo 'file'
  uploadController,
)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))