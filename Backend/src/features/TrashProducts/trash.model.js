const mongoose = require("mongoose");

const trashSchema = new mongoose.Schema(
  {
    url: String,
    image: String,
    title: String,
    price1: Number,
    price2: Number,
    off: Number,
    category: String,
    qty: Number,
    brand: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Trash = mongoose.model("trash", trashSchema);

module.exports = Trash;
