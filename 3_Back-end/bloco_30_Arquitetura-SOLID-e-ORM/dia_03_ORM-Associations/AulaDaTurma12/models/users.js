'use strict';
const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.hasMany( // Um usuario tem muitos produtos
      models.Product,
      {
        as: 'products', // Colunas
        foreignKey: 'userId', // chave estrangeira
      },
    );
  }

  return User;
}

module.exports = User;