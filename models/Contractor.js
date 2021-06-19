const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Contractor extends Model {}

Contractor.init(
  {
    contractor_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING, 
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'contractor'
  }
);

module.exports = Contractor;