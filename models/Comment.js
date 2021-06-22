const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    comment_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    comment: {
      type: DataTypes.TEXT, 
    },
    inspection_id: {
      type: DataTypes.STRING,
      references: {
        model: "inspection",
        key: "inspection_id",
      },
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