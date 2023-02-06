const express = require("express");
const User = require("../Auth/Login.model");
const Product = require("../Products/product.model");

const Wishlist = require("./wishlist.model");

const app = express.Router();

const authMiddleware = async (req, res, next) => {
  let token = req.headers.token;
  if (!token) {
    return res.send("missing token");
  }
  const [name, email, id, password] = token.split(":");
  try {
    let user = await User.findOne({ email });
    if (user) {
      if (password === user.password) {
        req.userId = user.id;
        next();
      } else {
        res.status(400).send("Auth Failure");
      }
    } else {
      res.status(400).send(`${email} not found`);
    }
  } catch (e) {
    res.status(404).send(e.message);
  }
};

app.use(authMiddleware);

app.get("/", async (req, res) => {
  try {
    let carts = await Wishlist.find({ user: req.userId }).populate([
      {
        path: "user",
        select: ["name", "email", "pinCode", "createdAt", "updatedAt"],
      },
      "product",
    ]);
    res.send(carts);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

app.post("/", async (req, res) => {
  try {
    let product = await Product.findOne({ id: req.body.product });
    let cart = await Wishlist.findOne({
      user: req.userId,
      product: req.body.product,
    });
    if (!cart) {
      let cartprod = await Wishlist.create({
        ...req.body,
        user: req.userId,
      });
      res.send(cartprod);
    } else {
     res.send("Already present to wishlist")
    }
  } catch (e) {
    res.status(404).send(e.message);
  }
});

app.delete("/:id", async (req, res) => {
  try {
      await Wishlist.findOneAndDelete({
      user: req.userId,
      product: req.params.id,
    });
    res.send("Deleted Successfully");
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports = app;
