'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Products', // Tabela
      'price', // A nova coluna
      { // As options
        type: Sequelize.FLOAT,
      },
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Products', 'price');
  }
};
