import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const BookAppointment = () => {
  const [doctors, setDoctors] = useState([]);
  const selectedDoctor = JSON.parse(localStorage.getItem("selectedDoctor"));
  const navigate = useNavigate();

  const [form, setForm] = useState({
    doctorId: selectedDoctor?._id,
    name: "",
    phone: "",
    age: "",
    problem: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/doctors")
      .then((res) => setDoctors(res.data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const bookNow = async () => {
    const token = localStorage.getItem("token");

    await axios.post("http://localhost:3000/api/appointments", form, {
      headers: { Authorization: token },
    });

    alert("Appointment Booked!");
    navigate("/appointments");
  };

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <h3 className="mb-4">Book Appointment</h3>

        {/* Selected doctor */}
        <div className="d-flex align-items-center mb-3">
          {/* <img
            src={selectedDoctor?.image}
            alt="doctor"
            style={{ width: "120px", borderRadius: "10px" }}
          />

          <div className="ms-3">
            <h4>{selectedDoctor?.name}</h4>
            <p className="text-muted">{selectedDoctor?.specialization}</p>
            <p><b>Experience:</b> {selectedDoctor?.experience} years</p>
          </div> */}
          <select
            className="form-control mb-3"
            name="doctorId"
            onChange={handleChange}
          >
            <option value="">Select Doctor</option>

            {doctors.map((doc) => (
              <option key={doc._id} value={doc._id}>
                {doc.name} — {doc.specialization}
              </option>
            ))}
          </select>
        </div>

        {/* Patient Details */}
        <input
          className="form-control mb-3"
          placeholder="Patient Name"
          name="name"
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          placeholder="Phone Number"
          name="phone"
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          type="number"
          placeholder="Age"
          name="age"
          onChange={handleChange}
        />

        <textarea
          className="form-control mb-3"
          placeholder="Describe your problem"
          name="problem"
          rows="3"
          onChange={handleChange}
        ></textarea>

        <input
          className="form-control mb-3"
          type="date"
          name="date"
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          type="time"
          name="time"
          onChange={handleChange}
        />

        <button className="btn btn-success w-100" onClick={bookNow}>
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookAppointment;
