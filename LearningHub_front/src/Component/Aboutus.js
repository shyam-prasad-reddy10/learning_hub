import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <i className="bi bi-mortarboard-fill me-2"></i>Learning Hub
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active" href="/home"><i className="bi bi-house-door-fill me-1"></i>Home</a></li>
              <li className="nav-item"><a className="nav-link active" href="/aboutus"><i className="bi bi-info-circle-fill me-1"></i>About Us</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"><i className="bi bi-book-half me-1"></i>Courses</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/register"><i className="bi bi-code me-1"></i>FrontEnd</a></li>
                  <li><a className="dropdown-item" href="/register"><i className="bi bi-code-slash me-1"></i>BackEnd</a></li>
                  <li><a className="dropdown-item" href="/register"><i className="bi bi-diagram-3-fill me-1"></i>Data Structures</a></li>
                  <li><a className="dropdown-item" href="/register"><i className="bi bi-cpu-fill me-1"></i>Operating Systems</a></li>
                  <li><a className="dropdown-item" href="/register"><i className="bi bi-brain-fill me-1"></i>AIML</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link active" href="/contact"><i className="bi bi-envelope-fill me-1"></i>Contact</a></li>
              <li className="nav-item"><a className="nav-link active" href="/faq"><i className="bi bi-question-circle-fill me-1"></i>FAQ</a></li>
            </ul>
            <form className="d-flex align-items-center gap-2">
              <input className="form-control me-2" type="search" placeholder="Search" />
              <button className="btn btn-outline-success" type="submit"><i className="bi bi-search me-1"></i>Search</button>
              <button className="btn btn-primary" type="button" onClick={() => navigate("/register")}><i className="bi bi-person-fill me-1"></i>Login</button>
            </form>
          </div>
        </div>
      </nav>

      {/* Member Cards */}
      <div className="container py-5">
        <div className="row justify-content-center g-4">

          {/* Shyam */}
          <div className="col-md-4">
            <div className="card shadow text-center p-3">
              <img src="/images/p1.jpg" className="img-thumbnail rounded-circle mx-auto" style={{ width: "120px", height: "120px" }} alt="Shyam" />
              <div className="card-body">
                <h5 className="card-title">Shyam</h5>
                <a href="https://www.linkedin.com/in/kamasani-shyam-prasad-reddy-687329334/" className="btn btn-outline-primary" target="_blank" rel="noreferrer">View LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Jaswanth */}
          <div className="col-md-4">
            <div className="card shadow text-center p-3">
              <img src="/images/p2.jpg" className="img-thumbnail rounded-circle mx-auto" style={{ width: "120px", height: "120px" }} alt="Jaswanth" />
              <div className="card-body">
                <h5 className="card-title">Jaswanth</h5>
                <a href="https://www.linkedin.com/in/jaswanth-gunana-048989323/" className="btn btn-outline-primary" target="_blank" rel="noreferrer">View LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Vinay */}
          <div className="col-md-4">
            <div className="card shadow text-center p-3">
            <img src="/images/p3.jpeg" className="img-thumbnail rounded-circle mx-auto" style={{ width: "120px", height: "120px" }} alt="Vinay" />
            <div className="card-body">
                <h5 className="card-title">Vinay</h5>
                <a href="https://www.linkedin.com/in/vinay-kumar-jogi-a78604351/" className="btn btn-outline-primary" target="_blank" rel="noreferrer">View LinkedIn</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white pt-4 pb-3 mt-auto">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <h5>Learning Hub</h5>
              <p>Empowering learners with quality tech education. Join us to explore, learn, and grow!</p>
            </div>
            <div className="col-md-4 mb-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/register" className="text-white text-decoration-none">Courses</a></li>
                <li><a href="/faq" className="text-white text-decoration-none">FAQ</a></li>
                <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
                <li><a href="/login" className="text-white text-decoration-none">Login</a></li>
              </ul>
            </div>
            <div className="col-md-4 mb-3">
              <h5>Contact</h5>
              <p>Email: support@learninghub.com</p>
              <p>Phone: +91-12345-67890</p>
              <div>
                <a href="#" className="text-white me-2"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-white me-2"><i className="bi bi-twitter"></i></a>
                <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
          <hr className="border-light" />
          <p className="text-center mb-0">&copy; 2025 Learning Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
