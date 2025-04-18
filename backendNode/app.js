const express = require("express");
const cors = require("cors");
const itemsRouter = require("./routes/items");
require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", itemsRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Lost and Found API" });
});

module.exports = app;
