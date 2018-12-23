const mongoose = require("mongoose");

const newphotoSchema = new mongoose.Schema({
  newpic1: { type: String, required: true },
  newpic2: { type: String, required: true },
  newpic3: { type: String, required: true },
  nptitle: { type: String, required: true },
  npview: { type: String, required: true },
});

module.exports = mongoose.model("newphotos", newphotoSchema);