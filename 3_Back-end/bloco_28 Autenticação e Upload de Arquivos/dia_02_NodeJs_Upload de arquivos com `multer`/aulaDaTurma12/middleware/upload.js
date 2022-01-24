const multer = require('multer');

const storage = multer.diskStorage({ // O storage define como vai ser o nome e como vai ser salvo o arquivo
  destination: (req, file, callback) => {
    // aqui dentro eu posso fazer validações antes de escolher o local para salvar, tbm posso retronar erros
    const { id } = req.params;

    if (!id) return callback(Error('Cade o ID?'), ''); // Estou validando se a pessoa tem o id por exemplo
    if(file.mimetype !== 'image/jpeg') return callback(Error('Formato invalido'), ''); // verificando o typo

    callback(null, 'uploads/'); // se td estiver certo, eu falo que não tem erro 'null' e escolho o local para salvar o arquivo.

  },
  filename: (req, file, callback) => { // aqui e a mesma coisa
    const { id } = req.params;
    if (!id) return callback(Error('Cade o ID?'), ''); // Estou validando se a pessoa tem o id por exemplo

    return callback(null, file.originalname); // Estou o arquivo com o nome original

  },
});

module.exports = multer({ storage }); // exporta o multer e fala qual o destino dos arquivos 'uploads/'