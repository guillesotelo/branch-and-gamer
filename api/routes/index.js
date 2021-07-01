const express = require("express");
const router = express.Router();

const auth = require("./auth");
const users = require("./users")
const products = require("./products")
const cart = require("./cart");


router.use("/auth", auth);
router.use("/users", users)
router.use("/products", products);
router.use("/cart", cart);

module.exports = router;
