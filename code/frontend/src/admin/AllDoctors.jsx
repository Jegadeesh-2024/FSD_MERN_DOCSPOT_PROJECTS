import { useEffect, useState } from "react";
import axios from "axios";

const AllDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("http://localhost:3000/api/admin/doctors", {
      headers: { Authorization: token }
    })
    .then(res => setDoctors(res.data));
  }, []);

  const deleteDoctor = async (id) => {
    const token = localStorage.getItem("token");

    await axios.delete(`http://localhost:3000/api/admin/doctor/${id}`, {
      headers: { Authorization: token }
    });

    alert("Doctor Deleted");
    // window.location.reload();
    // Refresh list without reload
    setDoctors(prev => prev.filter(doc => doc._id !== id));
  };

  return (
    <div>
      <h2>All Doctors</h2>
      <h4>Total Doctors:{doctors.length}</h4>

      {doctors.map((doc) => (
        <div key={doc._id}>
          <h4>{doc.name}</h4>
          <p>{doc.specialization}</p>
          <button onClick={() => deleteDoctor(doc._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AllDoctors;
