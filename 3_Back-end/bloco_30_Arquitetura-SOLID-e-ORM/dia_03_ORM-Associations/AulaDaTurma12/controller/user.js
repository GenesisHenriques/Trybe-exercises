const express = require('express');
const { User } = require('../models');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, username, email, password } = req.body;

  try {
    const created = await User.create({ name, username, email, password });
    return res.status(200).json(created);
  } catch (error) {
    console.log(error.message);
    return res.status(500).end();
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    return res.status(500).end();
  }
});

router.get('/:id', async (req, res) => {
  try {
    const found = await User.findByPk(req.params.id); // esse found não é um obj js qualquer, ele tem funções dentro dele, por causa do findByPk
    if (!found) return res.status(404).end();

    if (!req.query.includeProducts) return res.status(200).json(found);

    const products = await found.getProducts();

    return res.status(200).json({ ...found, products });
  } catch (error) {
    console.log(error.message);
    return res.status(500).end();
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const found = await User.findByPk(req.params.id);
    if (!found) return res.status(404).end();
    await User.destroy({ where: { id: req.params.id } })
    return res.status(204).end();
  } catch (error) {
    console.log(error.message);
    return res.status(500).end();
  }
});

router.put('/:id', async (req, res) => {
  const { name, username, email, password } = req.body;
  try {
    const found = await User.findByPk(req.params.id);
    if (!found) return res.status(404).end();
    await User.update(
      { name, username, email, password },
      { where: { id: req.params.id } },
    );
    return res.status(204).end();
  } catch (error) {
    console.log(error.message);
    return res.status(500).end();
  }
});

module.exports = router;