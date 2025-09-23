import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


const Login = () => {
  const navigate = useNavigate();

  
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formBody = new URLSearchParams();
    formBody.append("username", formData.username);
    formBody.append("password", formData.password);

    fetch("http://localhost:9090/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formBody.toString()
    })
    .then(res => res.json())
    .then(data => {
      console.log("Login response:", data);
    })
    .catch(err => {
      console.error("Login error:", err);
      alert("Login request failed.");
    })
    .finally(() => {
      navigate("/profile");
    });


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};




  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#f4f6f9' }}>
      <div className="bg-white p-4 rounded shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4 fw-bold text-dark">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="un" className="form-label fw-bold">Username:</label>
            <input
              type="text"
              id="un"
              name="un"
              className="form-control rounded mb-3"
              placeholder="Enter username"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label fw-bold">Password:</label>
            <input
              type="password"
              id="pwd"
              name="pwd"
              className="form-control rounded mb-3"
              placeholder="Enter password"
              required
            />
          </div>
          <button type="submit" className="btn text-white w-100" style={{ backgroundColor: '#007bff' }}>Login</button>
          <button type="reset" className="btn w-100 mt-3" style={{ backgroundColor: '#f0f0f0', color: '#333', border: '1px solid #ccc' }}>Reset</button>
        </form>
        <div className="text-center mt-3">
          <p>Don't have an account? <a href="/register" className="btn btn-link">Register here</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
