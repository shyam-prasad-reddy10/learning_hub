// SidebarLayout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SidebarLayout = () => {
  return (
    <div className="d-flex min-vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      {/* Sidebar */}
      <div
        className="d-flex flex-column text-white p-4"
        style={{
          width: '250px',
          backgroundColor: '#403c3b',
          minHeight: '100vh',
          position: 'sticky',
          top: 0,
        }}
      >
        <Link to="/" className="mb-4 text-center">
          <img
            src="/images/logo.png"
            alt="Home"
            style={{ width: '100px', cursor: 'pointer' }}
            className="mx-auto d-block"
          />
        </Link>

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

      {/* Main Content Area */}
      <div className="flex-grow-1 p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarLayout;
