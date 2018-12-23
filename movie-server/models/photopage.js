const mongoose = require("mongoose");

const photopageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  img1: { type: String, required: true },
  img2: { type: String, required: true },
  img3: { type: String, required: true },
});

module.exports = mongoose.model("photopages", photopageSchema);