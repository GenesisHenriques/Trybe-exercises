const Sequelize = require('sequelize');
const db = require('./db');

const Produto = db.define('produto', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  preco: Sequelize.DECIMAL,
  descricao: Sequelize.STRING,
})

module.exports = Produto;

// Essa é uma representação de uma tabela que existe no meu banco - mapeamento 