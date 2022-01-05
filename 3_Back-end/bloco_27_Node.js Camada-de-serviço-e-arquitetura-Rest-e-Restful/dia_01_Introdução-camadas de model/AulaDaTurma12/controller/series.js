const express = require('express')
const { find, findById, create, update, remove } = require('../model/series');

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res, next) => {
  try {
    characters = await find();
    return res.status(200).send(characters);
  } catch (error) {
    next(err);
  }
});

router.get('/:id', async (req,res, next) => {
  try {
    const { id } = req.params;
    const character = await findById(parseInt(id));

    if(!character) return res.status(404).end();
    return res.status(200).send(character);

  } catch (error) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { name, series } = req.body;

    const created = await create(name, series);
    return res.status(201).send(created);
  } catch (error) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, series } = req.body;

    if (!name || !series) return res.status(404).send({ message: 'Informe o nome do ator e o nome da serie' });

    const found = await findById(parseInt(id))

    if(!found) return res.status(404).end();

    const updated = await update(parseInt(id), name, series);

    return res.status(200).send(updated);
  } catch (error) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const found = await findById(parseInt(id))

    if(!found) return res.status(404).end();

    await remove(parseInt(id))
    return res.status(204).end();
  } catch (error) {
    next(err);
  }
});

module.exports = router;