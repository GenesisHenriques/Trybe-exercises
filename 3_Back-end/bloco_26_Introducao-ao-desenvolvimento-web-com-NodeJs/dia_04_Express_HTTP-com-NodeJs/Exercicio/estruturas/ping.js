module.exports = async(req, res) => {
  try {
    res.status(200).json({ "message": 'pong' })
  } catch (error) {
    next(error)
  }
};