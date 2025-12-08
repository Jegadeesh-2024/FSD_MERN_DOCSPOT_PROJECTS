import { useState } from "react";

const DoctorForm = () => {
  const [form, setForm] = useState({
    name: "",
    specialization: "",
    experience: "",
    
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:3000/api/doctors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Doctor Added!");
    setForm({ name: "", specialization: "",experience:"" });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow p-4">
            <h3 className="text-center mb-4">Add Doctor</h3>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control mb-3"
                name="name"
                value={form.name}
                placeholder="Doctor Name"
                onChange={handleChange}
              />

              <input
                type="text"
                className="form-control mb-3"
                name="specialization"
                value={form.specialization}
                placeholder="Specialization"
                onChange={handleChange}
              />
              <input
                className="form-control mb-3"
                name="experience"
                placeholder="Experience"
                onChange={handleChange}
              />
              

              <button type="submit" className="btn btn-primary w-100">
                Add Doctor
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorForm;
