const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Inspector extends Model {}

Inspector.init(
  {
    inspector_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    electrical: {
      type: DataTypes.BOOLEAN, 
    },
    mechanical: {
      type: DataTypes.BOOLEAN,
    },
    plumbing: {
      type: DataTypes.BOOLEAN,
    },
    building: {
      type: DataTypes.BOOLEAN,
    },
   
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'inspector'
  }
);

module.exports = Inspector;