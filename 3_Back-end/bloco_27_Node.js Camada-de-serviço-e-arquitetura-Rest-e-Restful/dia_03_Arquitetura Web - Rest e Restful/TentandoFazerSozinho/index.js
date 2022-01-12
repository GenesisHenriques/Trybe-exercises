const express = require('express')

const rootRouter = require('./controller/router');
const error = require('./middlewara/error');

const app = express()
const port = 3000

app.use(express.json()); // pra que serve isso msm?
app.use(rootRouter);
app.use(error);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))