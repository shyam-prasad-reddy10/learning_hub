import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    query: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Query submitted successfully!");
    console.log("Form Data:", formData);
    setFormData({ fullname: "", email: "", mobile: "", query: "" });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Contact Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">Mobile</label>
                <input
                  type="text"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="query" className="form-label">Query</label>
                <textarea
                  className="form-control"
                  id="query"
                  name="query"
                  rows="4"
                  value={formData.query}
                  onChange={handleChange}
                  placeholder="Enter your query here"
                  required
                ></textarea>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>

            <div className="text-center mt-3">
              <Link to="/" className="btn btn-link">Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
