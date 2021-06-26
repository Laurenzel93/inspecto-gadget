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
    date: {
      type: DataTypes.DATE,
    },
    date_scheduled: {
      type: DataTypes.DATE, 
    },
    admin: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    permit_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: "Permit",
        key: "id",
      },
    },
    inspector: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'inspection'
  }
);

module.exports = Inspection;