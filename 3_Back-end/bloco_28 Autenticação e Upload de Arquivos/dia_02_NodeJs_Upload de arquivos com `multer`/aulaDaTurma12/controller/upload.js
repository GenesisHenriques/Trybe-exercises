const { statusCodes } = require('http-status-code');

module.exports = async (req, res, next) => {
  try {
    if (req.file) return res.status(statusCodes.OK).send({message: 'Arquivo subido com sucesso'});
    return res.status(statusCodes.NO_CONTENT).end();
  } catch (error) {
    // next(error);
    return res.status(400).send({ message: error });
  }
};