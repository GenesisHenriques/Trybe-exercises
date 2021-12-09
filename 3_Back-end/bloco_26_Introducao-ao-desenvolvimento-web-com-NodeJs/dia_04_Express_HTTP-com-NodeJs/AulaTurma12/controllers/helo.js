module.exports = (req, res, next) => {
  return res.status(200).send({
    message: "Helo World!"
  }); // retorna status 200 e fecha a função com o send
};
