const fs = require('fs').promises;

const read = async (req, res, next) => {
  try {
    const data = await fs.readFile('names.txt', 'utf-8');
    const { letter } = req.query;
    const names = data.toString().split('\n')

    return res.status(200).send({ names: names.filter(
    val => !letter || val[0].toLocaleLowerCase() === letter.toLocaleLowerCase()
  ) })
  } catch (error) {
    next(error)
  }
}

const create = async (req, res, next) => {
  try {
    console.log(req.body);
    res.status(200).end();
  } catch (error) {
    next(error)
  }
}

module.exports = { read, create }