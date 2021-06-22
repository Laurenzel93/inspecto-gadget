const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Invoice extends Model {}

Invoice.init(
  {
    invoice_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    item: {
      type: DataTypes.STRING, 
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    amount_total: {
      type: DataTypes.INTEGER, 
    }, 
    permit_id: {
      type: DataTypes.STRING,
      references: {
        model: "permit",
        key: "permit_id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'invoice'
  }
);

module.exports = Invoice;