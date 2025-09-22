// src/Component/dbms/Module2.js
import React, { useState } from 'react';

const questions = [
  {
    question: 'Which SQL command is used to create a new table?',
    options: ['MAKE TABLE', 'CREATE TABLE', 'NEW TABLE', 'TABLE CREATE'],
    answer: 1
  },
  {
    question: 'Which data type is most suitable for storing a student\'s name?',
    options: ['INT', 'CHAR(5)', 'VARCHAR(50)', 'TEXT(10)'],
    answer: 2
  },
  {
    question: 'What does the following SQL query do?\nSELECT * FROM Students;',
    options: [
      'Selects students with grade A',
      'Selects students older than 15',
      'Selects all records from the Students table',
      'Deletes all students'
    ],
    answer: 2
  },
  {
    question: 'What is the purpose of the WHERE clause in SQL?',
    options: [
      'To sort results alphabetically',
      'To filter records based on a condition',
      'To count total rows',
      'To join multiple tables'
    ],
    answer: 1
  },
  {
    question: 'Which SQL query returns students older than 15?',
    options: [
      'SELECT age > 15 FROM Students;',
      'SELECT * FROM Students WHERE age > 15;',
      'FIND * FROM Students age > 15;',
      'GET Students WHERE age IS ABOVE 15;'
    ],
    answer: 1
  },
  {
    question: 'How do you insert a new student into the Students table?',
    options: [
      'INSERT INTO Students VALUES (1, \'John\', 16, \'A\');',
      'ADD TO Students (1, \'John\', 16, \'A\');',
      'PUT INTO Students (1, \'John\', 16, \'A\');',
      'SET Students VALUES (1, \'John\', 16, \'A\');'
    ],
    answer: 0
  },
  {
    question: 'Which SQL command will update a student’s grade?',
    options: [
      'UPDATE Students SET grade = \'B\' WHERE id = 3;',
      'CHANGE grade = \'B\' IN Students WHERE id = 3;',
      'MODIFY Students grade \'B\' IF id = 3;',
      'SET Students grade \'B\' WHERE id = 3;'
    ],
    answer: 0
  },
  {
    question: 'What will this query return?\nSELECT COUNT(*) FROM Students;',
    options: [
      'The number of students with grade \'A\'',
      'The number of columns in the table',
      'The total number of student records',
      'The sum of all ages'
    ],
    answer: 2
  },
  {
    question: 'What keyword is used to insert multiple rows?',
    options: [
      'MULTI INSERT',
      'INSERT ALL',
      'INSERT INTO ... VALUES (...), (...);',
      'ADD MANY'
    ],
    answer: 2
  },
  {
    question: 'What is the role of PRIMARY KEY in a table?',
    options: [
      'Allows multiple duplicate values',
      'Defines the default value for a column',
      'Uniquely identifies each record in a table',
      'Prevents updating of rows'
    ],
    answer: 2
  }
];

const Module2 = () => {
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
      <h3 className="fw-bold mb-4 text-primary">DBMS – Module 2 Quiz</h3>
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

export default Module2;
