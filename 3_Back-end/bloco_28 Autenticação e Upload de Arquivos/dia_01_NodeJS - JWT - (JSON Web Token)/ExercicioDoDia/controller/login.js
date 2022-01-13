// controllers/login.js
const { status } = require('express/lib/response');
const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');

const validateBody = (body) =>
  /* Utilizamos o Joi para validar o schema do body */
  Joi.object({
    username: Joi.string().min(5).alphanum().required(),
    password: Joi.string().min(5).required(),
  }).validate(body);

// -----------------------------------------------------------

module.exports = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const { error } = validateBody(req.body);
    console.log(error);
    if (error) return res.status(401).send({ message: 'Error no username ou password' })

    if(username === "admin" && password !== "s3nh4S3gur4???") {
    const err = new Error('Invalid username or password');
    err.statusCode = 401;
    return next(err);
    };

    const admin = username === "admin" && password === "s3nh4S3gur4???";

    const JWT_SECRET = '12345';
    const header = {
      "alg": "HS256",
      "typ": "JWT"
    };
    const payload = {
      username,
      admin,
    };

    const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};