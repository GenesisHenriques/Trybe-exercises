const { getSimpsons } = require('../fs-utils');

module.exports = async (req, res) => {
  const simpsons = await getSimpsons();
  const { id } = req.params;

  if (typeof(parseInt(id)) === 'number' && id <= simpsons.length) {
    const simpson = simpsons.find((simpson) => simpson.id === id)
    return res.status(200).json(simpson);
  } else {
    return res.status(200).json(simpsons);
  }
};

