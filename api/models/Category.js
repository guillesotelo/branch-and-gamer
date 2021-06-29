const S = require("sequelize");
const db = require("../db");

class Category extends S.Model {}

Category.init(
  {
    name: {
      type: S.STRING,
      validate: {
        notEmpty: true,
        notNull: true,
      },
    },
  },
  { sequelize: db, modelName: "categories" }
);

module.exports = Category;
