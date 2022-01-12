const modelBooks = require('../../model/books');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const bookById = await modelBooks.list();

    return res.status(200).send(books);
  } catch (error) {
    next(error);
  }
};