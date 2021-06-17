const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    time_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    inspection_id: {
      type: DataTypes.STRING,
      references: {
        model: "inspection",
        key: "inspection_ID",
      },
    },
    comment: {
      type: DataTypes.TEXT, 
    },
    date: {
      type: DataTypes.DATE,
    },
    entered_by: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;