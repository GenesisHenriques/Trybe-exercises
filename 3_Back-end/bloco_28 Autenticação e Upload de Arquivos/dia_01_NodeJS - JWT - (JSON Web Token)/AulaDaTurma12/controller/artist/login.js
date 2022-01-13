const { findUserService } = require('../../service/users/findUserService');

module.exports = async (req, res, next) => {
  try {
    const { username = '', password = '' } = req.body;

    const result = await findUserService(username, password);

    return res.status(result.status).json({ message: result.message });
  } catch (error) {
    next(error);
  }
};