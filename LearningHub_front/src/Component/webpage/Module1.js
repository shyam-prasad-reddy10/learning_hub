import React, { useState } from "react";

const Module1 = () => {
  const questions = [
    {
      question: "Which HTML tag is used for the main heading of a page?",
      options: ["<title>", "<h1>", "<head>", "<header>"],
      answer: "<h1>",
    },
    {
      question: "Which tag is used to insert a paragraph of text in HTML?",
      options: ["<p>", "<text>", "<paragraph>", "<content>"],
      answer: "<p>",
    },
    {
      question: "What HTML tag is used to display an image?",
      options: ["<pic>", "<img>", "<image>", "<src>"],
      answer: "<img>",
    },
    {
      question: "Which attribute is required in the <img> tag to specify the image location?",
      options: ["href", "src", "alt", "link"],
      answer: "src",
    },
    {
      question: "How do you create an unordered list in HTML?",
      options: ["<ol>", "<ul>", "<list>", "<li>"],
      answer: "<ul>",
    },
    {
      question: "Which CSS property changes the text color?",
      options: ["font-color", "text-style", "color", "text-color"],
      answer: "color",
    },
    {
      question: "Which tag is used to link an external website?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      answer: "<a>",
    },
    {
      question: "What does CSS stand for?",
      options: ["Creative Style Sheets", "Colorful Style Syntax", "Cascading Style Sheets", "Computer Styled Sections"],
      answer: "Cascading Style Sheets",
    },
    {
      question: "Which tag is best for grouping content semantically?",
      options: ["<div>", "<span>", "<section>", "<group>"],
      answer: "<section>",
    },
    {
      question: "Which CSS property is used to change the font family?",
      options: ["text-font", "font-style", "font-family", "font-type"],
      answer: "font-family",
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
      <h2>Module 1: HTML & Semantic Structure</h2>
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
