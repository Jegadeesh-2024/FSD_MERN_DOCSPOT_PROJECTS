const express = require("express");
const Doctor = require("../models/Doctor");
const router = express.Router();

// POST → Add a doctor
router.post("/", async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET → Show all doctors
router.get("/", async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
});
// delete
router.delete("/:id", async (req, res) => {
  try {
    await Doctor.findByIdAndDelete(req.params.id);
    res.json({ message: "Doctor deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
