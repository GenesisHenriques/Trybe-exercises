const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const routerProduct = require('./controller/product');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;

app.use('/', routerProduct)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))