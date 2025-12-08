// const express = require("express");
// const Doctor = require("../models/Doctor");
// const Appointment = require("../models/appointmentModel");
// const auth = require("../middleware/auth");
// const admin = require("../middleware/admin");

// const router = express.Router();
// // ADD DOCTOR
// router.post("/add-doctor", auth, admin, async (req, res) => {
//   const newDoc = await Doctor.create(req.body);
//   res.json(newDoc);
// });


// // GET ALL DOCTORS
// router.get("/doctors", auth, admin, async (req, res) => {
//   const doctors = await Doctor.find()
//   .populate("doctorId")
//   .populate("patientId")
//   res.json(doctors);
// });
// // DELETE DOCTOR
// router.delete("/doctor/:id", auth, admin, async (req, res) => {
//   await Doctor.findByIdAndDelete(req.params.id);
//   res.json({ message: "Doctor Deleted" });
// });
// // GET ALL APPOINTMENTS
// router.get("/appointments", auth, admin, async (req, res) => {
//   const apps = await Appointment.find().populate("doctorId").populate("patientId");
//   res.json(apps);
// });
// // UPDATE APPOINTMENT STATUS
// router.put("/appointment/:id", auth, admin, async (req, res) => {
//   const app = await Appointment.findByIdAndUpdate(
//     req.params.id,
//     { status: req.body.status },
//     { new: true }
//   );

//   res.json(app);
// });



// module.exports = router;
const express = require("express");
const Appointment = require("../models/appointmentModel");
const auth = require("../middleware/auth");
// const admin = require("../middleware/admin");
const router = express.Router();

// ADMIN → Get ALL Appointments
router.get("/appointments", auth,  async (req, res) => {
  try {
    const apps = await Appointment.find()
      .populate("doctorId")
      .populate("patientId");

    res.json(apps);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ADMIN → Update Appointment Status
router.put("/appointment/:id", auth,  async (req, res) => {
  try {
    await Appointment.findByIdAndUpdate(req.params.id, {
      status: req.body.status,
    });

    res.json({ message: "Status Updated" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

