const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Inspection extends Model {}

Inspection.init(
  {
    inspection_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    date_scheduled: {
      type: DataTypes.DATE, 
    },
    inspection_type: {
      type: DataTypes.STRING,
    },
    result: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.INTEGER,
    },
    address: {
      type: DataTypes.STRING,
    },
    property_id: {
      type: DataTypes.STRING,
    },
    contractor_id: {
      type: DataTypes.STRING, 
      references: {
        model: "contractor",
        key: "contractor_id",
      },
    },
    permit_id: {
      type: DataTypes.STRING,
      references: {
        model: "permit",
        key: "permit_id",
      },
    },
    inspector_id: {
      type: DataTypes.STRING,
      references: {
        model: "inspector",
        key: "inspector_id",
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