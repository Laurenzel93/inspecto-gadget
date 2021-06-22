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
    phone: {
      type: DataTypes.STRING, 
    },
    mobile: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.EMAIL, 
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'contractor'
  }
);

module.exports = Contractor;