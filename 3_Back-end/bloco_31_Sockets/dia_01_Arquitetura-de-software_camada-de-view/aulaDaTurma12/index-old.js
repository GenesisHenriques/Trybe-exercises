const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const connection = mysql.createPool({
  host: 'localhost',
  user: 'Genesis',
  password: 'Genesis022305@',
  database: 'live_lecture_31_1'
})

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/cats', async (req, res) => {
  try {
    const [cats] = await connection.execute('SELECT name, age FROM live_lecture_31_1.cats');

    const content = cats.reduce((html, cat) => {
      const { name, age } = cat;
      return html + `<li>Nome:${name} - Idade:${age}</li>`
    }, '');
    const htmlBase = `
    <html>
      <head>
        <title>Gatos</title>
      </head>
      <body>
        <ul style="backgroud-color: antiquewhite">
          ${content}
        </ul>
        <form action="/cats" method="POST">
          Nome: <input name="name" type="test">
          Idade: <input name="age" type="number">
          <button type="submit" target="_blank">Criar novo gato!</button>
        </form>
      </body>
    </html>
    `
    return res.send(htmlBase)
  } catch (error) {
    console.log('Olha esse error aqui irmão');
    return res.status(500).send('<h1>Erro ao encontrar os gatos</h1>');
  }
})

app.post('/cats', async (req, res) => {
  const { name, age } = req.body;

  try {
    await connection.execute(
      'INSERT INTO live_lecture_31_1.cats (name, age) VALUES (?,?)',
      [name, age],
    );

    res.send('<h2>Seu gatito registrado com sucesso!</h2>')
  } catch (error) {
    console.log(error.message);
    res.status(500).send('<h2>Erro ao cadastrar gatitos</h2>')
  }
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))