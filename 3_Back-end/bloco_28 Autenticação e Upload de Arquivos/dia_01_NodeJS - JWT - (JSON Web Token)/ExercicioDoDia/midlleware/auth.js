const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const JWT_SECRET = '12345';
    const token = req.headers.authorization; // Token enviado na requisição

    if (!token) { // Varifica o token
      const err = new Error('Token not found');
      err.statusCode = 401;
      return next(err);
    }

    try { // Verifica se o token é valido
      const payload = jwt.verify(token, JWT_SECRET); // Reverte a criptografia
      req.user = payload // Se o token for valido, não vai retronar nenhum error - Add os dados no req
      return next() // Bora pra proxima
    } catch (error) {
      error.statusCode = 401;
      next(error);
    }

  } catch (error) {
    next(error);
  }
};