import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const certificates = [
  {
    title: "Database Management System",
    org: "Codecademy",
    type: "Multiple Choice",
    img: "/images/data.jpg",
    link: "/certificates/dbms"
  },
  {
    title: "Programming and Development",
    org: "Coursera",
    type: "Code & Theory",
    img: "/images/fullstack.jpg",
    link: "/certificates/dev"
  },
  {
    title: "Web Development",
    org: "Meta",
    type: "Project-Based",
    img: "/images/web.jpg",
    link: "/certificates/web"
  },
  {
    title: "Tools and Productivity",
    org: "Udemy",
    type: "Timed Quiz",
    img: "/images/tool.jpg",
    badge: "AI skills",
    link: "/certificates/tools"
  }
];

const CertificateCard = ({ title, org, type, img, badge, link }) => (
  <div className="col-md-3 mb-4">
    <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div
        className="card h-100 shadow-sm rounded certificate-card"
        style={{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        }}
      >
        <div className="position-relative">
          <img
            src={img}
            className="card-img-top"
            alt={title}
            style={{ height: '150px', objectFit: 'cover' }}
          />
          {badge && (
            <span
              className="badge bg-dark position-absolute top-0 end-0 m-2"
              style={{
                fontSize: '0.75rem',
                padding: '0.4em 0.6em',
                borderRadius: '0.5rem'
              }}
            >
              {badge}
            </span>
          )}
        </div>
        <div className="card-body">
          <h6 className="text-muted mb-1">{org}</h6>
          <h5 className="card-title">{title}</h5>
          <p className="text-secondary">{type}</p>
        </div>
      </div>
    </Link>
  </div>
);

const Course = () => {
  return (
    <div className="container my-5">
      <h3 className="mb-4 fw-bold">Most Popular Certificates</h3>
      <div className="row">
        {certificates.map((cert, index) => (
          <CertificateCard key={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default Course;
