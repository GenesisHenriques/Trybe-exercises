const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const routerProduct = require('./controller/product');
const routerUser = require('./controller/user');
const routerSelloff = require('./controller/selloff');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;

app.use('/product', routerProduct);
app.use('/user', routerUser);
app.use('/selloff', routerSelloff);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))