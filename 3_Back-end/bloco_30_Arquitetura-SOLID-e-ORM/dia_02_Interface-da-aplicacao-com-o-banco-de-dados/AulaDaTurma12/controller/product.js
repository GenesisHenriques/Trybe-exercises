const express = require('express');
const { route } = require('express/lib/application');
const { Product } = require('../models'); // Importando o index eu consigo ter acesso a todos os models do projeto
const router = express.Router();

router.post('/', async(req, res) => {
  try {
    const { name, description, price } = req.body;
    const newProduct = await Product.create({ name, description, price });
    return res.status(200).send(newProduct);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send();
  }
})

router.get('/', async (req, res) => {
  try {
      const products = await Product.findAll();
      return res.status(200).send(products);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send();
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) return res.status(404).send({ message: 'Produto não encontrado' });

    return res.status(200).send(product);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send();
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) return res.status(404).send({ message: 'Produto não encontrado' });

    await Product.destroy({ where: {
      id: id,
    } });

    return res.status(204).end();
  } catch (error) {
    console.error(error.message);
    return res.status(500).send();
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) return res.status(404).send({ message: 'Produto não encontrado' });

    const { name, description, price } = req.body;

    await Product.update( { name, description, price },
      {
        where: { id: id },
      },
    );

    return res.status(204).end({ message: 'Atualizado' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).send();
  }
})

module.exports = router;
