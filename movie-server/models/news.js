const mongoose = require("mongoose")

const hotSchema = new mongoose.Schema({
    hottitle: { type: String, required: true }
  });
  
  module.exports = mongoose.model("hotnews", hotSchema);