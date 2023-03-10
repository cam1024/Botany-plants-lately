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
    toxic_to_people: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      
    },
    toxic_to_dogs: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      
    },
    toxic_to_cats: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      
    },
    user_id: {
      type: DataTypes.INTEGER,
      references:{
        model: 'user',
        key: 'id',
      },

    },
  },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'plant',
    
  }
);

module.exports = Plant;
