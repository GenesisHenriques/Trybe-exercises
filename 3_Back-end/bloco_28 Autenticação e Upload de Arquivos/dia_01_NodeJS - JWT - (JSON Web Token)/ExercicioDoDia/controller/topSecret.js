module.exports = async (req, res, next) => {
  try {
    res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Arannha' });
  } catch (error) {
    next(error);
  }
};