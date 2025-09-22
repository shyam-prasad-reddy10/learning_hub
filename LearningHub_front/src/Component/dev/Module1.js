import React, { useState } from "react";

const Module1 = () => {
  const questions = [
    {
      question: "What is the correct syntax to print in Java?",
      options: ["print('Hello')", "System.out.println('Hello')", "echo('Hello')", "Console.WriteLine('Hello')"],
      answer: "System.out.println('Hello')",
    },
    {
      question: "Which method is the entry point for a Java program?",
      options: ["start()", "init()", "main()", "run()"],
      answer: "main()",
    },
    {
      question: "Which keyword is used to take input in Java?",
      options: ["Scanner", "Input", "Read", "Cin"],
      answer: "Scanner",
    },
    {
      question: "Which of the following is NOT a valid data type in Java?",
      options: ["int", "float", "boolean", "decimal"],
      answer: "decimal",
    },
    {
      question: "What is the result of 10 / 2 in Java?",
      options: ["5", "5.0", "'5'", "Error"],
      answer: "5",
    },
    {
      question: "Which statement is used for decision-making in Java?",
      options: ["if", "goto", "switch", "Both if and switch"],
      answer: "Both if and switch",
    },
    {
      question: "What is the output if marks = 85 and condition is marks > 80?",
      options: ["True", "False", "85", "Error"],
      answer: "True",
    },
    {
      question: "Which is the correct way to declare a class in Java?",
      options: ["class Book {}", "Book:class {}", "def Book {}", "create Book()"],
      answer: "class Book {}",
    },
    {
      question: "How to create an object from a class named Car?",
      options: ["Car car = new Car();", "Car = new car();", "new Car car();", "object Car = new Car();"],
      answer: "Car car = new Car();",
    },
    {
      question: "Which keyword is used to define constructor in Java?",
      options: ["void", "new", "class name", "init"],
      answer: "class name",
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
      <h2>Module 1: Java Basics</h2>
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

export default Module1;
