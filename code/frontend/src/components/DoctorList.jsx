import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import doctors from '../data/doctors'

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/api/doctors")
      .then(res => setDoctors(res.data));
  }, []);

  const viewDoctor = (doc) => {
    // Save selected doctor in localStorage
    localStorage.setItem("selectedDoctor", JSON.stringify(doc));
    navigate("/book");
  };

  return (
   <div className="container mt-4">
      <h2 className="mb-4 text-center">Book Appointment</h2>

      <div className="row">
        {doctors.map((doc) => (
          <div className="col-md-4 mb-4" key={doc._id}>
            <div className="card shadow p-3">
              <img
                src={doc.image}
                alt={doc.name}
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h4>{doc.name}</h4>
                <p className="text-muted">{doc.specialization}</p>
                <p><b>Experience:</b> {doc.experience} years</p>

                <button
                  className="btn btn-primary w-100"
                  onClick={() => viewDoctor(doc)}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
