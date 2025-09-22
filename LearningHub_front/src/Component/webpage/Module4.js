import React, { useState } from "react";

const Module4 = () => {
  const questions = [
    {
      question: "Which HTML element is used to collect user input?",
      options: ["<form>", "<input>", "<label>", "<text>"],
      answer: "<input>",
    },
    {
      question: "Which attribute ensures a field must be filled before submission?",
      options: ["required", "validate", "checked", "must"],
      answer: "required",
    },
    {
      question: "Which event is used to intercept form submission in JavaScript?",
      options: ["onsubmit", "onclick", "onchange", "onsave"],
      answer: "onsubmit",
    },
    {
      question: "How do you prevent the form from submitting in JavaScript?",
      options: ["stop()", "preventSubmit()", "event.preventDefault()", "return false"],
      answer: "event.preventDefault()",
    },
    {
      question: "What is a valid email format?",
      options: ["user@mail", "user@mail.com", "@mail.com", "user.mail.com"],
      answer: "user@mail.com",
    },
    {
      question: "Which method displays an alert box?",
      options: ["showAlert()", "alert()", "display()", "window.show()"],
      answer: "alert()",
    },
    {
      question: "How to check if a string is empty in JavaScript?",
      options: ["if (str.empty)", "if (!str)", "if (str == '')", "Both B and C"],
      answer: "Both B and C",
    },
    {
      question: "What input type is used for email validation?",
      options: ["text", "email", "message", "password"],
      answer: "email",
    },
    {
      question: "What JavaScript structure is used to run checks?",
      options: ["if-else", "switch", "for", "Both A and B"],
      answer: "Both A and B",
    },
    {
      question: "How do you access the value of a form field in JavaScript?",
      options: ["form.value", "input.get()", "document.getElementById().value", "form.inputValue()"],
      answer: "document.getElementById().value",
    }
  ];

  const [selected, setSelected] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionChange = (index, option) => {
    const newSelected = [...selected];
    newSelected[index] = option;
    setSelected(newSelected);
  };

  const handleSubmit = () => {
    let newScore = 0;
    selected.forEach((option, index) => {
      if (option === questions[index].answer) {
        newScore++;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  const percentage = (score / questions.length) * 100;
  const passed = percentage >= 75;

  const retryQuiz = () => {
    setSelected(Array(questions.length).fill(null));
    setSubmitted(false);
    setScore(0);
  };

  return (
    <div className="container mt-4">
      <h2>Module 4: Form Validation</h2>
      {questions.map((q, index) => (
        <div key={index} className="mb-3">
          <h5>{index + 1}. {q.question}</h5>
          {q.options.map((option, i) => (
            <div key={i} className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name={`question-${index}`}
                value={option}
                checked={selected[index] === option}
                onChange={() => handleOptionChange(index, option)}
                disabled={submitted}
              />
              <label className="form-check-label">{option}</label>
            </div>
          ))}
        </div>
      ))}

      {!submitted ? (
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      ) : (
        <div className={`mt-4 p-3 rounded ${passed ? 'bg-success text-white' : 'bg-danger text-white'}`}>
          <h4>{passed ? `Pass ✅ - ${percentage}%` : `Fail ❌ - ${percentage}%`}</h4>
          {!passed && (
            <button className="btn btn-warning mt-3" onClick={retryQuiz}>
              Retry
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Module4;
