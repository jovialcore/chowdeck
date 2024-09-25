'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('menu-items', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT
      },

      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      }

    })
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('menu-items')
  }
};
