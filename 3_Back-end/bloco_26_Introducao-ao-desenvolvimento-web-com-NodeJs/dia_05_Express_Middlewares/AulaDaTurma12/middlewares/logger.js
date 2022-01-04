module.exports = async(req, res, next) => {
  req.startTime = Date.now();
  console.log(`${req.method} path: ${req.path}  parametros: ${req.query}`);
  next();
};