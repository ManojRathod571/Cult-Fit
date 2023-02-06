const express = require("express");
const User = require("../Auth/Login.model");
const Product = require("../Products/product.model");

const Cart = require("./Cart.model");

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
    let carts = await Cart.find({ user: req.userId }).populate([
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
    let product = await Product.findOne({ _id: req.body.product });

    if (product.qty < req.body.quantity) {
      return res.send(`product have ${product.qty} left`);
    } else {
      let cart = await Cart.findOne({
        user: req.userId,
        product: req.body.product,
      });
      if (!cart) {
        let cartprod = await Cart.create({
          ...req.body,
          user: req.userId,
        });
        await Product.findByIdAndUpdate(product.id, {
          qty: product.qty - cartprod.quantity,
        });
        res.send(cartprod);
      } else {
        let cartProd = await Cart.findOneAndUpdate(
          {
            user: req.userId,
            product: req.body.product,
          },
          {
            quantity: cart.quantity + req.body.quantity,
          }
        );

        await Product.findByIdAndUpdate(product.id, {
          qty: product.qty - req.body.quantity,
        });
        res.send(cartProd);
      }
    }
  } catch (e) {
    res.status(404).send(e.message);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    let product = await Product.findOne({ id: req.params.id });
    let cart = await Cart.findOne({
      user: req.userId,
      product: req.params.id,
    });

    await Product.findOneAndUpdate(
      { _id: req.params.id },
      {
        qty: product.qty + cart.quantity,
      }
    );

    await Cart.findOneAndDelete({ user: req.userId, product: req.params.id });
    res.send("Deleted Successfully");
  } catch (e) {
    res.status(404).send(e.message);
  }
});

app.patch("", async (req, res) => {
  try {
    let product = await Product.findOne({ _id: req.body.product });

    if (product.qty < req.body.quantity) {
      return res.send(`product have ${product.qty} left`);
    } else {
      let cart = await Cart.findOne({
        user: req.userId,
        product: req.body.product,
      });

      await Cart.findOneAndUpdate(
        {
          user: req.userId,
          product: req.body.product,
        },
        {
          quantity: cart.quantity + req.body.quantity,
        }
      );

      if (req?.body?.quantity == -1) {
        await Product.findByIdAndUpdate(product.id, {
          qty: product.qty + 1,
        });
      } else if (req?.body?.quantity == 1) {
        await Product.findByIdAndUpdate(product.id, {
          qty: product.qty - 1,
        });
      }
      res.send("updated !!!");
    }
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports = app;
