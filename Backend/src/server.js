require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connect = require("./Congif/db");
const cors = require("cors");
const PORT = process.env.PORT;

const productRoute = require("./features/Products/product.route");
const cartRoute = require("./features/Cart/Cart.route");
const userRoute = require("./features/Auth/Login.route");
const wishlistRoute = require("./features/Wishlist/wishlist.route");
const trashRoute = require("./features/TrashProducts/trash.route");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/products", productRoute);
app.use("/cart", cartRoute);
app.use("/user", userRoute);
app.use("/wishlist", wishlistRoute);
app.use("/trash", trashRoute);

app.get("/", async (req, res) => {
  res.send("knergoineriufneriurje");
});

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`http://localhost:${PORT}`);
  } catch (error) {
    console.log("object");
  }
});
