const model = require('../../model/artist');

module.exports = async (req, res, next) => {
  try {
    const { name, genres } = req.body;

    if(!name || !genres) return res.status(400).send({ message: 'Informe o name e o genres pf!' });

    const newArtist = { name, genres }
    await model.create(newArtist);

    return res.status(200).send(newArtist);
  } catch (error) {
    next(error)
  }
};