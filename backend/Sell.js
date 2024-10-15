const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

// Define the schema
const sellSchema = new mongoose.Schema({
  username: String,
  modelName: String,
  boxAndCharger: String,
  imeiNumber: String,
  condition: String,
  screenCracks: String,
  bodyCracks: String,
  ownerName: String,
  phoneNumber: String,
  email: String,
  address: String,
  pincode: String,
});

sellSchema.plugin(plm);

// Create the model
const Sell = mongoose.model("Sell", sellSchema);

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/DB");

module.exports = Sell;
