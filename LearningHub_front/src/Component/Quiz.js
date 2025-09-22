// src/Component/Quiz.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const quizzes = [
  {
    title: "Database Management System",
    path: "dbms",
    org: "Codecademy",
    type: "Multiple Choice",
    img: "/images/data.jpg",
  },
  {
    title: "Programming and Development",
    path: "dev",
    org: "Coursera",
    type: "Code & Theory",
    img: "/images/fullstack.jpg",
  },
  {
    title: "Web Development",
    path: "webpage",
    org: "Meta",
    type: "Project-Based",
    img: "/images/web.jpg",
  },
  {
    title: "Tools and Productivity",
    path: "tools",
    org: "Udemy",
    type: "Timed Quiz",
    img: "/images/tool.jpg",
    badge: "New"
  }
];

const QuizCard = ({ title, org, type, img, badge, path }) => (
  <div className="col-md-3 mb-4">
    <div className="card h-100 shadow-sm rounded">
      <div className="position-relative">
        <img src={img} className="card-img-top" alt={title} style={{ height: '150px', objectFit: 'cover' }} />
        {badge && (
          <span className="badge bg-danger position-absolute top-0 end-0 m-2">
            {badge}
          </span>
        )}
      </div>
      <div className="card-body">
        <h6 className="text-muted mb-1">{org}</h6>
        <h5 className="card-title text-dark">{title}</h5>
        <p className="text-secondary">{type}</p>
        <Link to={`/quiz/${path}`} className="btn btn-primary mt-2">Go to Quiz</Link>
      </div>
    </div>
  </div>
);

const Quiz = () => {
  return (
    <div className="container my-5">
      <h3 className="mb-4 fw-bold">Available Quizzes</h3>
      <div className="row">
        {quizzes.map((quiz, index) => (
          <QuizCard key={index} {...quiz} />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
