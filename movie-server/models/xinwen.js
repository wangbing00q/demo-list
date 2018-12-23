const mongoose = require("mongoose");

const xinwenzixunSchema = new mongoose.Schema({
  nimg: { type: String, required: true },
  ntitle: { type: String, required: true },
  ninfo: { type: String, required: true },
  ndate: { type: String, required: true },
  npoint: { type: String, required: true },
  nview: { type: String, required: true },
});

module.exports = mongoose.model("xinwenzixuns", xinwenzixunSchema);