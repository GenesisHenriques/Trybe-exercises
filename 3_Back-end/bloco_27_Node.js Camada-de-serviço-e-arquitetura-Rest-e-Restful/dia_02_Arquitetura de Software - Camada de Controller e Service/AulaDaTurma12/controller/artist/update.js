const model = require('../../model/artist');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const found = model.findById(id);
    if (!found) return res.status(404).end();

    const { name, genres } = req.body;

    if(!name || !genres) return res.status(400).send({ message: 'Informe o name e o genres pf!' });

    const updated = await model.update({ ...found, name, genres });

    return res.status(200).send(updated);
  } catch (error) {
    next(error)
  }
};