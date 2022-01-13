const findById = require('../../model/artist/findById');
const jwt = require('jsonwebtoken');

const API_SECRET = 'mysecret';

const JWT_CONFIG = {
  expiresIn: '15m',
  algorithm: 'HS256'
};

const findUserService = async (username, password) => {
  if(!username || !password) return ({ status: 401, message: 'E necessario usuario e senha pala logar!' });

  const userFound = await findById(username);
  if(!userFound || userFound.password !== password) return ({ status: 401, message: 'Usuario ñão existe ou senha invalida' });

  const  { password: passDB, ...userWithoutPassword } = userFound;
  const token = jwt.sign({ data: userWithoutPassword }, API_SECRET, JWT_CONFIG);

  return ({ status: 200, message: token });
};

module.exports = { findUserService };