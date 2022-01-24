module.exports = async (err, req, res, _next) => {
  console.log(err.message);
  return res.status(500).end({ message: err.message });
};