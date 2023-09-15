const Category = require("./Category.js");
const Product = require("./Product.js");
const ProductTag = require("./ProductTag.js");
const Tag = require("./Tag.js");

Category.hasMany(Product)
Product.belongsTo(Category)
Product.belongsToMany(Tag, { through:ProductTag})
module.exports = { Category, Product, ProductTag, Tag };
