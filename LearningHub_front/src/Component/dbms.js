import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const questions = [
  {
    question: 'What is a primary key in a database?',
    options: [
      'A field that uniquely identifies each record',
      'A field that stores binary data',
      'A duplicate value in a table',
      'An optional field in a table'
    ],
    answer: 0
  },
  {
    question: 'Which of the following is a type of database model?',
    options: [
      'Relational',
      'Flat',
      'Hierarchical',
      'All of the above'
    ],
    answer: 3
  },
  {
    question: 'What does SQL stand for?',
    options: [
      'Structured Question Language',
      'System Query Language',
      'Structured Query Language',
      'Simple Query Language'
    ],
    answer: 2
  }
];

const DBMSQuiz = () => {
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

  return (
    <div className="container my-5">
      <h3 className="fw-bold mb-4">DBMS Quiz</h3>
      {questions.map((q, qIndex) => (
        <div key={qIndex} className="mb-4 p-3 border rounded shadow-sm bg-white">
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
        <div className="alert alert-info mt-4">
          You scored <strong>{score}</strong> out of <strong>{questions.length}</strong>.
        </div>
      )}
    </div>
  );
};

export default DBMSQuiz;
