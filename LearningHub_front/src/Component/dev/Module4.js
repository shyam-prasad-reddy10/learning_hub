import React, { useState } from "react";

const Module4 = () => {
  const questions = [
    {
      question: "Which keyword is used to define a function in Python?",
      options: ["func", "function", "def", "define"],
      answer: "def",
    },
    {
      question: "Which of these is a valid way to declare a structure in C?",
      options: ["struct Student {}", "structure Student", "define struct Student", "class Student"],
      answer: "struct Student {}",
    },
    {
      question: "How do you take input in C?",
      options: ["input()", "cin", "scanf()", "read()"],
      answer: "scanf()",
    },
    {
      question: "What is the output of: print(4 // 3) in Python?",
      options: ["1.333", "1", "1.0", "Error"],
      answer: "1",
    },
    {
      question: "Which keyword is used in Java to create a new object?",
      options: ["new", "object", "create", "init"],
      answer: "new",
    },
    {
      question: "Which symbol is used for single-line comments in Python?",
      options: ["//", "#", "--", "/*"],
      answer: "#",
    },
    {
      question: "What is the correct way to declare a constant in C?",
      options: ["const int PI = 3.14;", "#define PI 3.14", "constant PI = 3.14;", "Both A and B"],
      answer: "Both A and B",
    },
    {
      question: "In Java, which method is automatically called when an object is created?",
      options: ["main()", "new()", "init()", "Constructor"],
      answer: "Constructor",
    },
    {
      question: "Which loop runs at least once regardless of condition in C?",
      options: ["for", "while", "do-while", "loop"],
      answer: "do-while",
    },
    {
      question: "Which function in Python splits a sentence into words?",
      options: [".split()", "splitText()", "divide()", "tokenize()"],
      answer: ".split()",
    },
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
      <h2>Module 4: Mixed Programming Fundamentals</h2>
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
