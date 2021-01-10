'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DjMusicalgenres', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        type: Sequelize.fn("uuid_generate_v4")
      },
      dj_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "Djs",
          key: "id"
        }
      },
      musicalgenre_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "Musicalgenres",
          key: "id"
        }
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
    await queryInterface.dropTable('DjMusicalgenres');
  }
};