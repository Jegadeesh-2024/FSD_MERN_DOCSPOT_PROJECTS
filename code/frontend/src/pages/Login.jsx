import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    const res = await axios.post("http://localhost:3000/api/auth/login", form);

    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      alert("Login Success!");
      // window.location.href = "/book";
      navigate('/book')
    } else {
      alert(res.data.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow p-4">
            <h3 className="text-center mb-4">Login</h3>

            <input
              className="form-control mb-3"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />

            <input
              className="form-control mb-3"
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <button className="btn btn-primary w-100" onClick={loginUser}>
              Login
            </button>

            <p className="text-center mt-3">
              New user? <a href="/register">Register</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
