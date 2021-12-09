const SECRET = 'password';

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization !== SECRET) {
    return res.status(401).end();
  }
  next();
};
