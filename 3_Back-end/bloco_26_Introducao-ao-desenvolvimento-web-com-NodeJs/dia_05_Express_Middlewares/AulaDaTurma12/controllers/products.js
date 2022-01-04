const express = require('express');

const products = [
  {
    id: 1,
    name: 'office chair',
    colors: ['blue', 'white']
  },
  {
    id: 2,
    name: 'candles',
    colors: ['white']
  }
];

const findById = (req, res, next) => {
  const { id } = req.params;

  const product = products.find(product => product.id === parseInt(id, 10));

  if (!product) {
    return next({ status: 404, message: 'product not found.' });
  };

  res.status(200).json(product);

  next();
};

const list = (req, res, next) => {
  res.status(200).send(products);
  next();
};

const create = (req, res, next) => {
  products.push(req.body);

  res.status(201).end();
  next();
};

const router = express.Router({ mergeParams: true });

router.get('/', list) //app.get('/product', auth, list);
router.get('/', create) //app.post('/product', auth, create);
router.get('/:id', findById) //app.get('/product/:id', auth, findById);

module.exports = router;