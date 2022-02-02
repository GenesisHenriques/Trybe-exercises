'use strict';

const { query } = require("express");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'iPhone X',
          description: 'Um telefone qualquer',
          price: 8990.90,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Xioami',
          description: 'Muito melhor que o iphone',
          price: 200.00,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
