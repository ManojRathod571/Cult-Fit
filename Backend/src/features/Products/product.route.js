const express = require("express");
const Trash = require("../TrashProducts/trash.model");
const Product = require("./product.model");

const app = express.Router();

app.get("", async (req, res) => {
  const { category, q, page, limit, input, price, disSort, off } = req.query;
  try {
    if (category && q) {
      let temp = new RegExp(q, "i");
      let products = await Product.find({
        $and: [{ title: temp }, { category: category }],
      })
        .skip((page - 1) * limit)
        .limit(limit);
      res.send(products);
    } else if (category && input) {
      let temp = new RegExp(input, "i");
      let products = await Product.find({
        $and: [{ title: temp }, { category: category }],
      })
        .skip((page - 1) * limit)
        .limit(limit);
      res.send(products);
    } else if (category && off) {
      let minimum = Number(off.substring(0, 2));
      let maximum = Number(off.substring(3, 5));
      let products = await Product.find({
        $and: [
          { category: category },
          { off: { $gte: minimum, $lte: maximum } },
        ],
      })
        .skip((page - 1) * limit)
        .limit(limit);
      res.send(products);
    } else if (category && price) {
      if (price === "asc") {
        let products = await Product.find({ category: category })
          .sort({
            price1: 1,
          })
          .skip((page - 1) * limit)
          .limit(limit);
        res.send(products);
      } else if (price === "desc") {
        let products = await Product.find({ category: category })
          .sort({
            price1: -1,
          })
          .skip((page - 1) * limit)
          .limit(limit);
        res.send(products);
      }
    } else if (category && disSort) {
      if (disSort === "asc") {
        let products = await Product.find({ category: category })
          .sort({
            off: 1,
          })
          .skip((page - 1) * limit)
          .limit(limit);
        res.send(products);
      } else if (disSort === "desc") {
        let products = await Product.find({ category: category })
          .sort({
            off: -1,
          })
          .skip((page - 1) * limit)
          .limit(limit);
        res.send(products);
      }
    } else if (category) {
      let products = await Product.find({ category: category })
        .skip((page - 1) * limit)
        .limit(limit);
      res.send(products);
    } else if (input) {
      let temp = new RegExp(input, "i");
      let validate = await Product.find({ title: temp });
      res.send(validate);
    } else {
      let products = await Product.find()
        .skip((page - 1) * limit)
        .limit(limit);
      res.send(products);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log({ id });
  try {
    let Singleproduct = await Product.findById(id);
    res.send(Singleproduct);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.patch("/:id", async (req, res) => {
  try {
    let product = await Product.findByIdAndUpdate(req.params.id, {
      image: req.body?.image,
      price1: req.body?.price1,
      price2: req.body?.price2,
      brand: req.body?.brand,
      title: req.body?.title,
      off: req.body?.off,
      qty: req.body?.qty,
    });
    res.send(product);
  } catch (e) {
    res.send(e.message);
  }
});

app.put("/:id", async (req, res) => {
  try {
    let trash = await Trash.create(req.body);
    let product = await Product.findByIdAndDelete(req.params.id);
    res.send(trash);
  } catch (e) {
    res.send(e.message);
  }
});

module.exports = app;
