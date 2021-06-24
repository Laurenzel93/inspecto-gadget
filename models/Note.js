const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Note extends Model {}

Note.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    note: {
      type: DataTypes.TEXT, 
    },
    inspection_id: {
      type: DataTypes.STRING,
      references: {
        model: "inspection",
        key: "id",
      },
    },
    
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'note'
  }
);

module.exports = Note;