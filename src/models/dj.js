const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dj extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     **/
    static associate(models) {
      // define association here
      Dj.belongsTo(models.Club)
      this.belongsToMany(models.Musicalgenres, {
        through: "DjMusicalgenres",
        foreignKey: "dj_id",
        as: "musicalgenres"
      })
    }
  };
  Dj.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    url_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: true,
        len: [3, 50],
    },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: true,
        len: [3, 50],
    },
    },
    biography: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        len: [500, 2000],
      }
    },
    soundcloud:
    {
      type: DataTypes.STRING,
      validate: {
        len: [10, 2083]
      }
    }[[]],
    facebook:
    {
      type: DataTypes.STRING,
      validate: {
        len: [10, 2083]
      }
    },
    instagram:
    {
      type: DataTypes.STRING,
      validate: {
        len: [10, 2083]
      }
    },
    spotify:
    {
      type: DataTypes.STRING,
      validate: {
        len: [10, 2083]
      }
    },
    beatport:
    {
      type: DataTypes.STRING,
      validate: {
        len: [10, 2083]
      }
    },
    mixcloud:
    {
      type: DataTypes.STRING,
      validate: {
        len: [10, 2083]
      }
    },
    youtube:
    {
      type: DataTypes.STRING,
      validate: {
        len: [10, 2083]
      }
    },
    club_id:
    {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Clubs",
        key: "id"
      }
    }
    
  }, {
    sequelize,
      modelName: 'Dj',
      createdAt: "created_at",
      updatedAt: "updated_at"
  });
  return Dj;
};