const mongoose = require("mongoose");
require("dotenv").config();
const connectionStr = process.env.MONGO_URL;

mongoose.connect(connectionStr, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});
mongoose.connection.on("error", (error) => {
  console.log("MongoDB connection error", error);
});
mongoose.connection.on("disconnected", () =>
  console.log("MongoDB disconnected")
);
