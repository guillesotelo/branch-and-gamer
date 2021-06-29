const S = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");

class User extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }

  // HAY QUE PROBARLO CON LAS RUTAS
  validatePassword(loginPassword) {
    const hassedLoginP = this.hash(loginPassword, this.salt);
    return hassedLoginP === this.password;
  }
}

User.init(
  {
    name: {
      type: S.STRING,
      validate: {
        notEmpty: true,
        notNull: true,
      },
    },
    email: {
      type: S.STRING,
      validate: {
        notEmpty: true,
        notNull: true,
        isEmail: true,
      },
      unique: true,
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: S.BOOLEAN,
    },
    salt: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "user" }
);

User.beforeCreate(async (user) => {
  user.salt = await bcrypt.genSalt(10);
  user.password = await user.hash(user.password, user.salt);
});

module.exports = User;
