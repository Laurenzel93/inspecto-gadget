const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Owner extends Model {}

Owner.init(
  {
    owner_id: {
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
      type: DataTypes.STRING, 
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'owner'
  }
);

module.exports = Owner;