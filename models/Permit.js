const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Permit extends Model {}

Permit.init(
  {
    permit_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    permit_type: {
      type: DataTypes.STRING,
    },
    date_expires: {
      type: DataTypes.DATE,
    },
    work_description: {
      type: DataTypes.STRING, 
    },
    grand_total: {
      type: DataTypes.INTEGER,
    },
    paid_total: {
      type: DataTypes.INTEGER,
    },
    balance_due: {
      type: DataTypes.INTEGER,
    },
    address: {
      type: DataTypes.STRING,
    },
    contractor: {
      type: DataTypes.STRING,
    },
    owner: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'permit'
  }
);

module.exports = Permit;