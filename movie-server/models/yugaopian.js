const mongoose = require("mongoose");

const yugaopianSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  img: { type: String, required: true },
  mount: { type: String, required: true },
});

module.exports = mongoose.model("yugaopians", yugaopianSchema);