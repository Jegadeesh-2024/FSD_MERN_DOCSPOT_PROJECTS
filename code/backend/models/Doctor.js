const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  experience: { type: Number, required: true },
  image: { type: String}
});

module.exports = mongoose.model("Doctor", doctorSchema);
