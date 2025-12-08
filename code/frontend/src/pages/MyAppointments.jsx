import { useEffect, useState } from "react";
import axios from "axios";
// import { Navigate, useNavigate } from "react-router-dom";

const MyAppointments = () => {
  const [apps, setApps] = useState([]);
  // const navigate = useNavigate();
  const [search, setSearch] = useState("");
  

  useEffect(() => {
    const token = localStorage.getItem("token");
    // navigate('/doctor-list')

    axios.get("http://localhost:3000/api/appointments", {
      headers: { Authorization: token }
    })
      .then(res => setApps(res.data));
  }, []);


  const deleteAppointment = async (id) => {
  const token = localStorage.getItem("token");

  await axios.delete(`http://localhost:3000/api/appointments/${id}`, {
    headers: { Authorization: token }
  });

  // Remove from UI
  setApps(apps.filter(app => app._id !== id));

  alert("Appointment deleted successfully!");
};
 // ⭐ SIMPLE DOCTOR NAME FILTER ONLY
  const filteredApps = apps.filter(app => {
    const doctor = app.doctorId?.name?.toLowerCase() || "";
    return doctor.includes(search.toLowerCase());
  });


  return (
    <div className="container mt-4">
      <h2>My Appointments</h2>
      <input
  type="text"
  className="form-control mb-3"
  placeholder="Search Doctor Name..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>


      {filteredApps.map(app => (
        <div key={app._id} className="card shadow p-3 mb-3">
          <h4>{app.doctorId?.name}</h4>
          <p>{app.doctorId?.specialization}</p>
          

          <p>Patient:<b>{app.name}</b></p>
          <p>Phone:<b>{app.phone}</b></p>
          <p>Age:<b>{app.age}</b></p>
          <p>Problem:<b>{app.problem}</b></p>
          <p>Date: <b>{app.date}</b></p>
          <p>Time: <b>{app.time}</b></p>
          <p>Status: <span className="badge bg-info">{app.status}</span></p>
        <button
  className="btn btn-danger mt-2"
  onClick={() => deleteAppointment(app._id)}
>
  Delete
</button>

        </div>
      ))}
    </div>
  );
};

export default MyAppointments;
