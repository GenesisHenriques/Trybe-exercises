const express = require('express');
const series = require('./controller/series');

const port = 3000;

const app = express();
app.use(express.json());

// Meus endpoints

app.use('/series', series);

//Endpoint de erro
app.use((err, req, res, next) => {
  console.log(err.message);
  return res.status(500).end();
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));