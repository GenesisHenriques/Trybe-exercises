const jwt = require('jsonwebtoken');

const API_SECRET = 'mysecret';

module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if(!authorization) return res.status(401).send({ message: 'Token não informado' });

    try {
      const decoded = jwt.verify(authorization, API_SECRET);
      const { username } = decoded.data; // data > findUserService linha 18
      req.user = username; // Adiciona o username do usuario do REQ da requisição (req, res, next)
    } catch (error) {
      return res.status(401).send({ message: 'Token invalido' });
    }

    next();
  } catch (error) {
    next(error);
  }
};