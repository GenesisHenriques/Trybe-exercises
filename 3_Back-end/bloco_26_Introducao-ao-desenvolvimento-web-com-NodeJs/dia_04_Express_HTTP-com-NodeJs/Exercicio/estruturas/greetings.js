module.exports = async(req, res) => {
  try {
    const { name, age } = req.body;
    if (age > 17) return res.status(200).json({ "message": `Hello, ${name}!` });
    return res.status(401).json({ "message": "Unauthorized" })
  } catch (error) {
    next(error)
  }
};