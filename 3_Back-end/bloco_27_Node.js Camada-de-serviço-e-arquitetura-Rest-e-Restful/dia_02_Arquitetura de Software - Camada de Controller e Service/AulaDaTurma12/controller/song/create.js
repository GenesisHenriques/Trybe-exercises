const service = require('../../service/song');

module.exports = async (req, res, next) => {
  try {
    const { artistId, name, album } = req.body;

    if(!artistId || !name || !album) return res.status(400).send({ message: 'Informe o artistId, name e o album pf!' });

    let newSong = { artistId, name, album }
    newSong = await service.create(newSong);

    if(!newSong) return res.status(400).send({ message: 'Invalid artist id' });

    return res.status(200).send(newSong);
  } catch (error) {
    next(error)
  }
};