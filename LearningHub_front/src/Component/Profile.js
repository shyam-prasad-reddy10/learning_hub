import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const StudentProfile = () => {
  return (
    <div className="d-flex vh-100 bg-light">
      {/* Sidebar */}
      <div className="d-flex flex-column text-white p-4" style={{ width: '250px', backgroundColor: '#403c3b' }}>
        <h3 className="mb-4 text-center fw-bold">Student Profile</h3>
        <div className="nav nav-pills flex-column gap-3">
          <Link to="/courses" className="btn btn-outline-light text-start">
            <i className="bi bi-journal-text me-2"></i> Courses
          </Link>
          <Link to="/assignments" className="btn btn-outline-light text-start">
            <i className="bi bi-pencil-square me-2"></i> Assignment
          </Link>
          <Link to="/quiz" className="btn btn-outline-light text-start">
            <i className="bi bi-question-circle me-2"></i> Take a Quiz
          </Link>
          <Link to="/achievements" className="btn btn-outline-light text-start">
            <i className="bi bi-trophy me-2"></i> Achievements
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-5">
        <h1 className="display-4 text-dark mb-3">Welcome Back!</h1>
        <p className="lead text-muted">Select an option from the sidebar to get started.</p>
      </div>
    </div>
  );
};

export default StudentProfile;
