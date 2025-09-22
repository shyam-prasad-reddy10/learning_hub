import React, { useState } from "react";

const Module2 = () => {
  const questions = [
    {
      question: "Which operator is used to find if a number is even in Python?",
      options: ["%", "//", "/", "*"],
      answer: "%",
    },
    {
      question: "What loop can be used to keep guessing until correct?",
      options: ["for", "foreach", "while", "loop"],
      answer: "while",
    },
    {
      question: "Which data type is best for storing a list of tasks?",
      options: ["int", "str", "list", "dict"],
      answer: "list",
    },
    {
      question: "How do you read input from a user in Python?",
      options: ["scanf()", "input()", "read()", "cin>>"],
      answer: "input()",
    },
    {
      question: "Which statement is used to check a condition in Python?",
      options: ["case", "if", "switch", "check"],
      answer: "if",
    },
    {
      question: "How do you remove an item from a list in Python?",
      options: ["list.delete()", "list.remove()", "list.pop()", "Both remove() and pop()"],
      answer: "Both remove() and pop()",
    },
    {
      question: "Which function splits a sentence into words?",
      options: ["split()", "break()", "slice()", "divide()"],
      answer: "split()",
    },
    {
      question: "What will `5 % 2` return in Python?",
      options: ["2", "1", "0", "5"],
      answer: "1",
    },
    {
      question: "Which loop is best for repeating until a condition is false?",
      options: ["while", "for", "do-while", "loop"],
      answer: "while",
    },
    {
      question: "What keyword is used to define a function in Python?",
      options: ["func", "function", "def", "define"],
      answer: "def",
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
      <h2>Module 2: Python Basics</h2>
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

export default Module2;
