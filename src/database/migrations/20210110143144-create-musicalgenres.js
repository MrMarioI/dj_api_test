'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Musicalgenres', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        type: Sequelize.fn("uuid_generate_v4")
      },
      name: {
        type: Sequelize.STRING(50)
      },
      created_at: {
        allowNull: false,
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        allowNull: false,
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Musicalgenres');
  }
};