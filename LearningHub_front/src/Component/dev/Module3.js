// File: Module3.js (Dev - C Programming Fundamentals)

import React, { useState } from "react";

const Module3 = () => {
  const questions = [
    {
      question: "Which function is used to get user input in C?",
      options: ["input()", "cin", "scanf()", "gets()"],
      answer: "scanf()",
    },
    {
      question: "Which header file is needed for printf() and scanf()?",
      options: ["stdlib.h", "stdio.h", "conio.h", "math.h"],
      answer: "stdio.h",
    },
    {
      question: "Which data type is used to store a character?",
      options: ["int", "char", "float", "string"],
      answer: "char",
    },
    {
      question: "What is the value of PI used in area calculation?",
      options: ["3.14", "3.14159", "22/7", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "How is a function defined in C?",
      options: ["function add() {}", "void add() {}", "def add():", "fun add()"],
      answer: "void add() {}",
    },
    {
      question: "Which operator is used to get remainder in C?",
      options: ["/", "%", "//", "&"],
      answer: "%",
    },
    {
      question: "Which loop is used to repeat until a condition is false?",
      options: ["for", "do-while", "while", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "How do you define a struct in C?",
      options: ["structure {}", "struct name {}", "def struct {}", "struct = {}"],
      answer: "struct name {}",
    },
    {
      question: "Which of the following stores multiple student records?",
      options: ["int student[5];", "char *student;", "struct student[5];", "list student"],
      answer: "struct student[5];",
    },
    {
      question: "What keyword is used to declare a constant value?",
      options: ["define", "final", "const", "#define"],
      answer: "#define",
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
      <h2>Module 3: C Programming Fundamentals</h2>
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

export default Module3;
