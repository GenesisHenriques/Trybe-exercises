const express = require('express');

const ping = require('./controllers/ping');
const productsRouter = require('./controllers/products');
const { auth, logger, tracker, error } = require('./middlewares/index');


const app = express();

// Json parse
app.use(express.json());
const port = 3000;

// loger
app.use(logger);
app.get('/', (req, res) => res.send('Hello World!'));

app.get('/ping', ping);

// Router product
app.use('/product', auth, productsRouter)
// app.get('/product', auth, list);
// app.post('/product', auth, create);
// app.get('/product/:id', auth, findById);

app.use(tracker);
app.use(error);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));