const express = require('express')
const error = require('./middlewara/error');
const root = require('./controller/router');

const port = 3000

const app = express()

app.use(express.json());

app.use(root);

app.use(error)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))