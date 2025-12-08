const express = require("express");
const cors = require("cors");


const connectDb = require("./config/db");
const doctorRoutes = require("./routes/doctorRoutes");
const app = express();
const authRoutes = require("./routes/authRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const adminRoutes = require("./routes/adminRoutes");

// connected db
connectDb();

// middleware:
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/admin", adminRoutes);
// app.use("/api/admin", require("./routes/adminRoutes"));


// Routes

app.use("/api/doctors", doctorRoutes);

app.listen(3000, () => console.log("server running on port 3000"));
