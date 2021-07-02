const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Result extends Model {}

Result.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    result: {
      type: DataTypes.STRING,
    },
    notes: {
      type: DataTypes.TEXT, 
    },
    inspection_id: {
      type: DataTypes.STRING,
      references: {
        model: "inspection",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'result'
  }
);

module.exports = Result;
