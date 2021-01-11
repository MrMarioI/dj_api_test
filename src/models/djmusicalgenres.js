'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DjMusicalgenres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.DJ, { foreignKey: "dj_id" });
      this.belongsTo(model)
    }
  };
  DjMusicalgenres.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    dj_id: {
      type: DataTypes.UUID,
      unique: true,
      references: {
        model: "Djs",
        key: "id"
      }
    },
    musicalgenre_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Musicalgenres",
        key: "id"
      }
    }
  }, {
    sequelize,
      modelName: 'DjMusicalgenres',
      createdAt: "created_at",
      updatedAt: "updated_at"
  });
  return DjMusicalgenres;
};