const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Permit extends Model {}

Permit.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    permit_type: {
      type: DataTypes.STRING,
    },
    date_issued: {
      type: DataTypes.STRING,
    },
    date_expired: {
      type: DataTypes.DATE,
    },
    work_description: {
      type: DataTypes.STRING, 
    },
    owner_name: {
      type: DataTypes.STRING,
    },
    parcel_number: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'permit'
  }
);

module.exports = Permit;