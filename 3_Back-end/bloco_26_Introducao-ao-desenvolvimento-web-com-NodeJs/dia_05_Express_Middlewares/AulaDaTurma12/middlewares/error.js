const req = require("express/lib/request");

module.exports = async(err, req, res, next) => {
  res.status(err.status).send({ message: err.message })
};