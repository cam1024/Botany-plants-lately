const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plant extends Model{}

Plant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    toxicity: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    zodiac: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    holistic: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    belongs_to: {
      type: Datatypes.INTEGER,
      references:{
        model: 'user',
        key: 'id',
      },

    },
 
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'plant',
  }
);

module.exports = Plant;
