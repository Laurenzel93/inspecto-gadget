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
      type: DataTypes.STRING,
    },
    work_description: {
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
    
  },  
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Permit'
  }
);

module.exports = Permit;