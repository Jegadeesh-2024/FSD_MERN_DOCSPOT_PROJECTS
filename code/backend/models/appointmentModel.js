const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  // name: { type: String, required: true },   // ADD THIS
  date: String,
  time: String,
  name: { type: String, required: true },
  phone: { type: String, required: true },
  age: { type: Number, required: true },
  problem: { type: String },

  status: {
    type: String,
    default: "Pending", // Pending / Approved / Cancelled
  },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
