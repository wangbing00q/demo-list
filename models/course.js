const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  teacher: { type: String, required: true },
  teacherTitle: { type: String, required: true },
  class: { type: Number, required: true, default: 0 },
});

module.exports = mongoose.model("courses", courseSchema);
