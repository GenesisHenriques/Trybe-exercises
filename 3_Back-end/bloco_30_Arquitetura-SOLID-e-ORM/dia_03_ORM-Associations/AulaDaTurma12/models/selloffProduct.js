'use strict';
const SelloffProducts = (sequelize, DataTypes) => {
  const SelloffProducts = sequelize.define(
    "SelloffProducts",
    { },
    { timestamps: false },
  );

  SelloffProducts.associate = (models) => {
    models.Product.belongsToMany(
      models.Selloff,
      {
        as: 'selloffs',
        through: SelloffProducts,
        foreignKey: 'productId',
        otherKey: 'selloffId',
      }, // as === nomeColuna
    );
   // belongsToMany === pertence a muitos | through === atraves de

    models.Selloff.belongsToMany(
      models.Product,
      {
        as: 'products',
        through: SelloffProducts,
        foreignKey: 'selloffId',
        otherKey: 'productId'
      } // as === nomeColuna
    );
  };
  return SelloffProducts;
};

module.exports = SelloffProducts;
