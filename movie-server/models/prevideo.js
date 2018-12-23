const mongoose = require("mongoose");

const prevideoSchema = new mongoose.Schema({
  preimg: { type: String, required: true },
  pretitle: { type: String, required: true },
  preview: { type: String, required: true },
});

module.exports = mongoose.model("previewvideos", prevideoSchema);