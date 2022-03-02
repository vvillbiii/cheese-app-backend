const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CheeseSchema = new Schema({
  name: String,
  countryOfOrigin: String,
  image: String,
});

const Cheese = mongoose.model("Cheese", CheeseSchema);

module.exports = Cheese;
