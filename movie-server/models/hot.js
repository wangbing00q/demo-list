const mongoose = require("mongoose");

const newSchema = new mongoose.Schema({
  newimg: { type: String, required: true },
  newtitle: { type: String, required: true },
  newview: { type: String, required: true },
});

module.exports = mongoose.model("newnews", newSchema);
