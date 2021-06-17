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
    permit_id: {
      type: DataTypes.STRING,
      references: {
        model: "permit",
        key: "permit_id",
      },
    },
    inspection_type: {
      type: DataTypes.STRING,
    },
    date_time_scheduled: {
      type: DataTypes.DATE, 
    },
    address: {
      type: DataTypes.STRING,
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