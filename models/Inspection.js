const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Inspection extends Model {}

Inspection.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    inspection_date: {
      type: DataTypes.DATE,
    },
    date_scheduled: {
      type: DataTypes.DATE, 
    },
    scheduled_by: {
      type: DataTypes.STRING,
    },
    inspection_type: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    permit_id: {
      type: DataTypes.STRING,
      references: {
        model: "permit",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'inspection'
  }
);

module.exports = Inspection;