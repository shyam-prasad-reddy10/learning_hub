import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    city: "",
    email: "",
    password: "",
    role: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Stringifying the student data to JSON format
    const studentData = JSON.stringify({
      name: formData.name,
      dob: formData.dob,
      gender: formData.gender,
      city: formData.city,
      email: formData.email,
      password: formData.password
    });

    // Make POST request to the backend with role as a query parameter
    fetch(`http://localhost:9050/register?role=${formData.role}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: studentData
    })
      .then((response) => {
        if (response.ok) {
          alert("Registration successful!");
          navigate("/login");  // Redirect to login page
        } else {
          alert("Registration failed.");
        }
      })
      .catch((error) => {
        console.error("Registration failed:", error);
        alert("Registration failed.");
      });
  };
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="registration-container col-md-6 col-lg-4 bg-white p-4 rounded shadow">
        <h2 className="text-center mb-4 fw-bold text-dark">Registration Form</h2>
        <form onSubmit={handleSubmit}>
          

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="dob" className="form-label">DOB:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="form-control"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Gender:</label><br />
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="gender"
                id="male"
                value="M"
                checked={formData.gender === "M"}
                onChange={handleChange}
                className="form-check-input"
                required
              />
              <label htmlFor="male" className="form-check-label">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="gender"
                id="female"
                value="F"
                checked={formData.gender === "F"}
                onChange={handleChange}
                className="form-check-input"
                required
              />
              <label htmlFor="female" className="form-check-label">Female</label>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="city" className="form-label">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              className="form-control"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

<div className="mb-3">
            <label htmlFor="role" className="form-label">Role:</label>
            <select
              id="role"
              name="role"
              className="form-select"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select Role</option>
              <option value="Student">Student</option>
              <option value="Instructor">Instructor</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
        <div className="text-center mt-3">
          <p>Already a member? <a href="/login" className="text-primary text-decoration-none">Login here</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
