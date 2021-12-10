const fs = require('fs');


module.exports = async(req, res) => {
  try {
    const { getSimpsons, setSimpsons } = require('../fs-utils');
    const { id, name } = req.body;

    const simpsons = await getSimpsons();

    if (simpsons.map(({ id }) => id).includes(id)) {
      return res.status(409).json({ message: 'id already exists' });
    }

    simpsons.push({ id, name });
    await setSimpsons(simpsons);

    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};