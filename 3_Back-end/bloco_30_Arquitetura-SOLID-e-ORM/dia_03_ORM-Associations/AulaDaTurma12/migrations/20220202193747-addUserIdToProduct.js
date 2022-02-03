'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Products', // tabela
      'userId', // Coluna que vai ser adicionada
      { // Options da nova coluna
        type: Sequelize.INTEGER,
        allowNull: false, // não pode ter valor null
        defaultValue: 1, // valor padrão, caso não aja o valor
        references: { // referencia qual tabela
          model: 'Users', // tabela
          key: 'id', // Coluna
        },
        onUpdate: 'CASCADE', // politica de propagação - se eu atualizar, atualiza junto
        onDelete: 'CASCADE', // Politica de propagação - se eu deletar, deleta junto
      }
    )
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.removeColumn('Products', 'userId'); // Tabela - coluna
  }
};
