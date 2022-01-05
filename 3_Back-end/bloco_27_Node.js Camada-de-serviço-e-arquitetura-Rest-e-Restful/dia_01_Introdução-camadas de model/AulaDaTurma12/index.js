const express = require('express');
<<<<<<< HEAD
const series = require('./controller/series');
=======
const mysql = require('mysql2/promise'); // Para não preocupar com asyncAwait
>>>>>>> c4cd68d49cec9268d515748b4f38d1a24ab9f1fd

const port = 3000;

const app = express();
app.use(express.json());

// Meus endpoints
<<<<<<< HEAD

app.use('/series', series);
=======
app.get('/', (req, res) => res.send('Hello World!'))

>>>>>>> c4cd68d49cec9268d515748b4f38d1a24ab9f1fd

//Endpoint de erro
app.use((err, req, res, next) => {
  console.log(err.message);
  return res.status(500).end();
})


<<<<<<< HEAD
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
=======
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
>>>>>>> c4cd68d49cec9268d515748b4f38d1a24ab9f1fd
