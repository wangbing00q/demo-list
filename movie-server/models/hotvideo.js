const mongoose = require("mongoose");

const hotvideoSchema = new mongoose.Schema({
  hvimg: { type: String, required: true },
  hvtitle: { type: String, required: true },
  hvview: { type: String, required: true },
});

module.exports = mongoose.model("hotvideos", hotvideoSchema);