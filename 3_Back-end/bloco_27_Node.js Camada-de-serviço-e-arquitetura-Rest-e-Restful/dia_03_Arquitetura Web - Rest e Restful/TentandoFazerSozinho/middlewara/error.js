module.exports = async (err, req, res, next) => {
  console.log(err.message);
  res.status(500).end();
};