const express = require("express");
const app = express();

//db connnection
const dbConnection = require("./config/db.connections");
//models connection
const Cheese = require("./models/cheese");
require("dotenv").config();
const { PORT = 5000 } = process.env;

//
const cors = require("cors");
const morgan = require("morgan");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/cheese", async (req, res) => {
  try {
    res.json(await Cheese.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post("/cheese", async (req, res) => {
  const newCheese = req.body;
  try {
    res.json(await Cheese.create(newCheese));
  } catch (error) {
    res.status(400).json(error);
  }
});

app.get("/cheese/:id", async (req, res) => {
  const id = req.params.id;
  try {
    res.json(await Cheese.findById(id));
  } catch (error) {
    res.status(400).json(error);
  }
});

app.put("/cheese/:id", async (req, res) => {
  const id = req.params.id;
  const newCheese = req.body;
  try {
    res.json(await Cheese.findByIdAndDelete(id, newCheese, { new: true }));
  } catch (error) {
    res.status(400).json(error);
  }
});

app.delete("/cheese/:id", async (req, res) => {
  const id = req.params.id;
  try {
    res.json(await Cheese.findByIdAndDelete(id));
  } catch (error) {
    res.status(400).json(error);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
