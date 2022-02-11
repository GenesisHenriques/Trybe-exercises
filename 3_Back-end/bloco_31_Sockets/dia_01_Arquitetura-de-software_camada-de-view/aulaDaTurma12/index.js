const express = require('express');
const bodyParser = require('body-parser');
const catsControllers = require('./controllers/catController');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); // o motor que vai rodar a view
app.set('views', './views'); // aonde estão as minhas viws

app.get('/cats', catsControllers.getAllCats)
app.post('/cats', catsControllers.createCats)
app.get('/cats/:id', catsControllers.getCatsById)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))