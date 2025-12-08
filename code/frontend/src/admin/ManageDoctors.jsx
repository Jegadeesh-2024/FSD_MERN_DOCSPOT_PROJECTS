import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";

const ManageDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  const fetchDoctors = () => {
    const token = localStorage.getItem("token");

    axios.get("http://localhost:3000/api/doctors", {
      headers: { Authorization: token }
    }).then(res => setDoctors(res.data));
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const deleteDoctor = async (id) => {
    const token = localStorage.getItem("token");
    await axios.delete(`http://localhost:3000/api/doctors/${id}`, {
      headers: { Authorization: token }
    });

    alert("Doctor Deleted");
    fetchDoctors();
  };

  return (
    <AdminLayout>
      <h3>Manage Doctors</h3>

      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Specialization</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {doctors.map(doc => (
            <tr key={doc._id}>
              <td>{doc.name}</td>
              <td>{doc.specialization}</td>
              <td>
                <button 
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteDoctor(doc._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </AdminLayout>
  );
};

export default ManageDoctors;
