import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <i className="bi bi-mortarboard-fill me-2"></i>Learning Hub
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/home">
                  <i className="bi bi-house-door-fill me-1"></i>Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/aboutus">
                  <i className="bi bi-info-circle-fill me-1"></i>About Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-book-half me-1"></i>Courses
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/register"><i className="bi bi-code me-1"></i>FrontEnd</a></li>
                  <li><a className="dropdown-item" href="/register"><i className="bi bi-code-slash me-1"></i>BackEnd</a></li>
                  <li><a className="dropdown-item" href="/register"><i className="bi bi-diagram-3-fill me-1"></i>Data Structures</a></li>
                  <li><a className="dropdown-item" href="/register"><i className="bi bi-cpu-fill me-1"></i>Operating Systems</a></li>
                  <li><a className="dropdown-item" href="/register"><i className="bi bi-brain-fill me-1"></i>AIML</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link active">
                  <i className="bi bi-envelope-fill me-1"></i>Contact
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/faq">
                  <i className="bi bi-question-circle-fill me-1"></i>FAQ
                </a>
              </li>
            </ul>
            <form className="d-flex align-items-center gap-2">
              <input className="form-control me-2" type="search" placeholder="Search" />
              <button className="btn btn-outline-success" type="submit">
                <i className="bi bi-search me-1"></i>Search
              </button>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => navigate("/login")}
              >
                <i className="bi bi-person-fill me-1"></i>Login
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Carousel */}
      <div className="container carousel-container my-5">
        <div id="carouselExampleIndicators" className="carousel slide mx-auto" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" />
          </div>
          <div className="carousel-inner rounded-3 shadow">
            <div className="carousel-item active">
              <img src="/images/image1.jpg" className="d-block w-100" style={{ height: "400px", objectFit: "cover" }} alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src="/images/image2.jpg" className="d-block w-100" style={{ height: "400px", objectFit: "cover" }} alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src="/images/image4.jpg" className="d-block w-100" style={{ height: "400px", objectFit: "cover" }} alt="Slide 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white pt-4 pb-3 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <h5><i className="bi bi-mortarboard-fill me-2"></i>Learning Hub</h5>
              <p>Empowering learners with quality tech education. Join us to explore, learn, and grow!</p>
            </div>
            <div className="col-md-4 mb-3">
              <h5><i className="bi bi-link-45deg me-2"></i>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none"><i className="bi bi-book-half me-1"></i>Courses</a></li>
                <li><a href="/faq" className="text-white text-decoration-none"><i className="bi bi-question-circle-fill me-1"></i>FAQ</a></li>
                <li>
                  <Link to="/contact" className="text-white text-decoration-none">
                    <i className="bi bi-envelope-fill me-1"></i>Contact
                  </Link>
                </li>
                <li><a href="/login" className="text-white text-decoration-none"><i className="bi bi-person-fill me-1"></i>Login</a></li>
              </ul>
            </div>
            <div className="col-md-4 mb-3">
              <h5><i className="bi bi-telephone-fill me-2"></i>Contact</h5>
              <p><i className="bi bi-envelope-fill me-1"></i>Email: support@learninghub.com</p>
              <p><i className="bi bi-phone-fill me-1"></i>Phone: +91-9495466498</p>
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

export default HomePage;
