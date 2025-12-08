import { useState } from "react";
import axios from "axios";

const AddDoctor = () => {
  const [form, setForm] = useState({
    name: "",
    specialization: "",
    experience:""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addDoctor = async () => {
    const token = localStorage.getItem("token");

    await axios.post("http://localhost:3000/api/admin/add-doctor", form, {
      headers: { Authorization: token }
    });

    alert("Doctor Added");
  };

  return (
    <div>
      <h2>Add Doctor</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="specialization" placeholder="Specialization" onChange={handleChange} />
      <input name="experience" placeholder="experience" onChange={handleChange} />

      <button onClick={addDoctor}>Add</button>
    </div>
  );
};

export default AddDoctor;
