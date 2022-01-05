const express = require('express');
const mysql = require('mysql2/promise'); // Para não preocupar com asyncAwait

const port = 3000;

const app = express();
app.use(express.json());

// Meus endpoints
app.get('/', (req, res) => res.send('Hello World!'))


//Endpoint de erro
app.use((err, req, res, next) => {
  console.log(err.message);
  return res.status(500).end();
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))