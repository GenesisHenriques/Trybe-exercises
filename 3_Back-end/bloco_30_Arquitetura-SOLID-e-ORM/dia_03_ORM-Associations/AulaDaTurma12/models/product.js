'use strict';
const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
  });

  Product.associate = (models) => { // Cria a associação entre o bd e minha app
    Product.belongsTo(models.User, { as: 'user', foreignKey: 'userId' }) // Meu product pertence a um user / a referencia vai aparecer na coluna user com a relaçãoo/valor userId
  }

  return Product;
}

module.exports = Product;