const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Category extends Model {}

const categoryAttributes = {
  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const categoryOptions = {
  sequelize,
  modelName: "category",
  timestamps: false,
  freezeTableName: true,
  underscored: true,
};

Category.init(categoryAttributes, categoryOptions);

module.exports = Category;
