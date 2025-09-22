import React from 'react';
import { Link } from 'react-router-dom';

const DevQuizPage = () => {
  const pageStyle = {
    backgroundImage: "url('/images/fullstack.jpg')", // use the uploaded image path here
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    width: "80vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    overflow: "hidden",
  };

  const contentStyle = {
    background: "rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderRadius: "20px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
    padding: "2.5rem",
    maxWidth: "500px",
    width: "100%",
    color: "#fff",
    textAlign: "center"
  };

  const buttonStyle = {
    fontSize: "1.25rem",
    padding: "1rem",
    borderRadius: "10px",
    backgroundColor: "#ffffffcc",
    color: "#000",
    fontWeight: "600",
    transition: "transform 0.2s, background-color 0.3s",
    marginBottom: "1rem",
    border: "none"
  };

  const hoverEffect = e => {
    e.target.style.transform = "scale(1.05)";
    e.target.style.backgroundColor = "#f0f0f0";
  };

  const removeHover = e => {
    e.target.style.transform = "scale(1)";
    e.target.style.backgroundColor = "#ffffffcc";
  };

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <h2 className="mb-4">Developer Quiz Modules</h2>
        <div className="d-grid gap-3">
          <Link to="/quiz/dev/module1" style={buttonStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHover}>Module 1: HTML Basics</Link>
          <Link to="/quiz/dev/module2" style={buttonStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHover}>Module 2: CSS & Layout</Link>
          <Link to="/quiz/dev/module3" style={buttonStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHover}>Module 3: JavaScript</Link>
          <Link to="/quiz/dev/module4" style={buttonStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHover}>Module 4: React</Link>
        </div>
      </div>
    </div>
  );
};

export default DevQuizPage;
