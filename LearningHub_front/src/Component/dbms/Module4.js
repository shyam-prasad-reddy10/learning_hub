import React, { useState } from "react";

const questions = [
  {
    question: "What is the main function of SQL?",
    options: [
      "Data Entry",
      "Data Storage",
      "Data Retrieval",
      "Data Security"
    ],
    answer: 2
  },
  {
    question: "Which command is used to update data in a table?",
    options: [
      "INSERT INTO",
      "UPDATE",
      "SELECT",
      "DELETE"
    ],
    answer: 1
  },
  {
    question: "What is used to filter records in SQL?",
    options: [
      "ORDER BY",
      "WHERE",
      "HAVING",
      "GROUP BY"
    ],
    answer: 1
  },
  {
    question: "Which SQL clause is used to sort the results?",
    options: [
      "ORDER BY",
      "HAVING",
      "WHERE",
      "GROUP BY"
    ],
    answer: 0
  },
  {
    question: "Which SQL function is used to count the number of rows?",
    options: [
      "COUNT()",
      "SUM()",
      "AVG()",
      "MAX()"
    ],
    answer: 0
  }
];

const Module4 = () => {
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

  const percentage = (score / questions.length) * 100;
  const isPassed = percentage >= 75;

  return (
    <div className="container my-5">
      <h3 className="fw-bold mb-4 text-primary">SQL Quiz - Module 4</h3>
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
        <div className={`alert mt-4 ${isPassed ? 'alert-success' : 'alert-danger'}`}>
          You {isPassed ? 'Passed' : 'Failed'} with <strong>{percentage}%</strong>!
        </div>
      )}

      {submitted && !isPassed && (
        <button className="btn btn-warning mt-3" onClick={handleRetry}>Retry</button>
      )}
    </div>
  );
};

export default Module4;
