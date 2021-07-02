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
    type: {
      type: DataTypes.STRING,
    },
    issued: {
      type: DataTypes.STRING,
    },
    expired: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING, 
    },
    owner: {
      type: DataTypes.STRING,
    },
    owner_phone: {
      type: DataTypes.STRING,
    },
    owner_mobile: {
      type: DataTypes.STRING,
    },
    contractor: {
      type: DataTypes.STRING,
    },  
    contractor_phone: {
      type: DataTypes.STRING,
    },
    contractor_email: {
      type: DataTypes.STRING,
    },
    parcel_number: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    
  },  
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Permit'
  }
);

module.exports = Permit;