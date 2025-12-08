import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const registerUser = async () => {
   try {
      const res = await axios.post("http://localhost:3000/api/auth/register", form);

      if (res.data) {
        alert("Registered Successfully!");
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);

      // Backend error returned
      if (error.response) {
        alert(error.response.data.message || "Registration failed");
      } else {
        alert("Server not responding");
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow p-4">
            <h3 className="text-center mb-4">Register</h3>

            <input className="form-control mb-3" name="name" placeholder="Full Name" onChange={handleChange} />

            <input className="form-control mb-3" name="email" placeholder="Email" onChange={handleChange} />

            <input className="form-control mb-3" type="password" name="password" placeholder="Password" onChange={handleChange} />

            <button className="btn btn-success w-100" onClick={registerUser}>
              Register
            </button>

            <p className="text-center mt-3">
              Already have an account? <a href="/">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
