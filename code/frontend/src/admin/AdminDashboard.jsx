import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";

const AdminDashboard = () => {

  const [doctorsCount, setDoctorsCount] = useState(0);
  const [appointmentsCount, setAppointmentsCount] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");

    // Fetch Doctors Count
    axios.get("http://localhost:3000/api/doctors", {
      headers: { Authorization: token }
    })
    .then(res => setDoctorsCount(res.data.length));

    // Fetch Appointments Count
    axios.get("http://localhost:3000/api/admin/appointments", {
      headers: { Authorization: token }
    })
    .then(res => setAppointmentsCount(res.data.length));

  }, []);

  return (
    <AdminLayout>
      <div className="container mt-4">

      <h2>Welcome Admin</h2>

      <div className="d-flex gap-4 mt-4">

        {/* Doctor Card */}
        <div className="card p-4 shadow" style={{ width: "300px" }}>
          <h4>Total Doctors</h4>
          <h2>{doctorsCount}</h2>
          <p>Manage all registered doctors.</p>
        </div>

        {/* Appointment Card */}
        <div className="card p-4 shadow" style={{ width: "300px" }}>
          <h4>Total Appointments</h4>
          <h2>{appointmentsCount}</h2>
          <p>View all patient appointments.</p>
        </div>

      </div>
    </div>
    

      
    </AdminLayout>
  );
};

export default AdminDashboard;
