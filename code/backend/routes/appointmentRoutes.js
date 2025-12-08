const express = require("express");
const Appointment = require("../models/appointmentModel");
const auth = require("../middleware/auth"); // protection
const router = express.Router();

// CREATE APPOINTMENT
router.post("/", auth, async (req, res) => {
  try {
    const appointment = await Appointment.create({
      patientId: req.user.userId,
      doctorId: req.body.doctorId,
       name: req.body.name,
      phone: req.body.phone,
      age: req.body.age,
      problem: req.body.problem,
      date: req.body.date,
      time: req.body.time,
    });

    res.json(appointment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET APPOINTMENTS OF LOGGED-IN USER
router.get("/", auth, async (req, res) => {
  const appointments = await Appointment.find({ patientId: req.user.userId })
    .populate("doctorId");

  res.json(appointments);
});

// DELETE APPOINTMENT
router.delete("/:id", auth, async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ message: "Appointment Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
