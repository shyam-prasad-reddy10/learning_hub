// src/Component/dbms/Module1.js
import React, { useState } from 'react';

const questions = [
  {
    question: 'Which SQL statement is used to extract data from a database?',
    options: ['GET', 'OPEN', 'SELECT', 'EXTRACT'],
    answer: 2
  },
  {
    question: 'What does the acronym DBMS stand for?',
    options: [
      'Database Management System',
      'Data Backup Machine Software',
      'Database Maintenance Syntax',
      'Digital Base Mapping System'
    ],
    answer: 0
  },
  {
    question: 'What type of data is stored in an online shopping platform?',
    options: [
      'Weather forecasts',
      'Flight schedules',
      'Product details, user information, order history',
      'Wildlife tracking data'
    ],
    answer: 2
  },
  {
    question: 'What kind of database is commonly used in online shopping platforms?',
    options: [
      'Non-relational only',
      'Flat file database',
      'Relational database',
      'Graph database'
    ],
    answer: 2
  },
  {
    question: 'Why is a database useful in the context of online shopping?',
    options: [
      'It stores images of wildlife',
      'It helps manage large inventories and customer orders efficiently',
      'It prevents virus infections on devices',
      'It calculates employee salaries'
    ],
    answer: 1
  },
  {
    question: 'What type of data is stored in a school information system?',
    options: [
      'Banking transactions',
      'Student records, grades, attendance',
      'Stock market prices',
      'Car rental details'
    ],
    answer: 1
  },
  {
    question: 'What kind of database is commonly used in school information systems?',
    options: [
      'Relational database',
      'Blockchain database',
      'Document-based database only',
      'NoSQL only'
    ],
    answer: 0
  },
  {
    question: 'Why is a database useful in the context of school systems?',
    options: [
      'It manages airline seat bookings',
      'It allows for efficient tracking and updating of student data',
      'It stores cooking recipes',
      'It filters spam emails'
    ],
    answer: 1
  }
];

const Module1 = () => {
  const [selected, setSelected] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionChange = (qIndex, optionIndex) => {
    const updated = [...selected];
    updated[qIndex] = optionIndex;
    setSelected(updated);
  };

  const handleSubmit = () => {
    let correct = 0;
    selected.forEach((val, idx) => {
      if (val === questions[idx].answer) correct++;
    });
    setScore(correct);
    setSubmitted(true);
  };

  const handleRetry = () => {
    setSelected(Array(questions.length).fill(null));
    setSubmitted(false);
    setScore(0);
  };

  const percentage = Math.round((score / questions.length) * 100);
  const passed = percentage >= 75;

  return (
    <div className="container my-5">
      <h3 className="fw-bold mb-4 text-primary">DBMS – Module 1 Quiz</h3>
      {questions.map((q, qIndex) => (
        <div key={qIndex} className="mb-4 p-3 border rounded bg-white shadow-sm">
          <h5>{qIndex + 1}. {q.question}</h5>
          {q.options.map((option, oIndex) => (
            <div key={oIndex} className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name={`question-${qIndex}`}
                checked={selected[qIndex] === oIndex}
                onChange={() => handleOptionChange(qIndex, oIndex)}
                disabled={submitted}
              />
              <label className="form-check-label">{option}</label>
            </div>
          ))}
        </div>
      ))}

      {!submitted ? (
        <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
      ) : (
        <>
          <div className={`alert mt-4 ${passed ? 'alert-info' : 'alert-danger'}`}>
            {passed ? (
              <>Pass ✅ – You scored <strong>{percentage}%</strong></>
            ) : (
              <>Fail ❌ – You scored <strong>{percentage}%</strong></>
            )}
          </div>
          {!passed && (
            <button className="btn btn-warning mt-2" onClick={handleRetry}>Retry</button>
          )}
        </>
      )}
    </div>
  );
};

export default Module1;
