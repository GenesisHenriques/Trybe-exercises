module.exports = async (err, req, res, _next) => {
  console.log(err.message);
  res.status(500).end();
};