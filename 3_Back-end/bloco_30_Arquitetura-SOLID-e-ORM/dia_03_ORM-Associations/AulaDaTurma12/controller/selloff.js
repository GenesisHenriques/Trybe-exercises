const express = require('express');
const { route } = require('express/lib/application');
const { Selloff, Product } = require('../models');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, discount, startDate, endDate } = req.body;

  const start = new Date(startDate);
  const end = new Date(endDate);

  try {
    const newSelloff = await Selloff.create({ name, discount, startDate: start, endDate: end })
    return res.status(200).send(newSelloff);
  } catch (error) {
    console.log(e.message);
    return res.status(500).send({ message: 'Algo deu errado' });
  }
})

router.get('/', async (req, res, next) => {
  try {
    const sellOffs = await Selloff.findAll();
    return res.status(200).send(sellOffs);
  } catch (error) {
    console.log(e.message);
    return res.status(500).send({ message: 'Algo deu errado' });
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const selloff = await Selloff.findByPk(
      req.params.id,
      {
        include: { model: Product, as: 'products' },
      },
    );

    if (!selloff) return res.status(404).send({ message: 'Liquidação não encontrada' });
    return res.status(200).send(selloff);
  } catch (error) {
    console.log(e.message);
    res.status(500).send({ message: 'Algo deu errado' });
  }
})

router.post('/:id/products', async (req, res) => {
  try {
    const { productIds } = req.body;
    
    const selloff = await Selloff.findByPk(req.params.id);

    if (!selloff) return res.status(404).send({ message: 'Liquidação não encontrada' });

    const products = await Product.findAll({
      where: { id: productIds },
    });

    await selloff.addProducts(products);

    return res.status(200).json({ message: 'Produtos adicionados com sucesso' });
  } catch (error) {
    console.log(e.message);
    res.status(500).send({ message: 'Algo deu errado' });
  }
})


module.exports = router;

