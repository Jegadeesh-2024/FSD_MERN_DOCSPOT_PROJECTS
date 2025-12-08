import { useEffect, useState } from "react";
import axios from "axios";

const AllAppointments = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("http://localhost:3000/api/admin/appointments", {
      headers: { Authorization: token }
    })
    .then(res => setApps(res.data));
  }, []);

  const updateStatus = async (id, status) => {
    const token = localStorage.getItem("token");

    await axios.put(
      `http://localhost:3000/api/admin/appointment/${id}`,
      { status },
      { headers: { Authorization: token } }
    );

    alert("Status Updated");
    window.location.reload();
  };

  return (
    <div>
      <h2>All Appointments</h2>

      {apps.map((a) => (
        <div key={a._id} style={{ border:"1px solid #ccc", padding:"10px" }}>
          <h4>Doctor: {a.doctorId.name}</h4>
          <p>Patient: {a.patientId.name}</p>
          <p>Date: {a.date}</p>
          <p>Time: {a.time}</p>
          <b>Status: {a.status}</b>

          <br /><br />

          <button onClick={() => updateStatus(a._id, "Approved")}>Approve</button>
          <button onClick={() => updateStatus(a._id, "Cancelled")}>Cancel</button>
        </div>
      ))}
    </div>
  );
};

export default AllAppointments;
