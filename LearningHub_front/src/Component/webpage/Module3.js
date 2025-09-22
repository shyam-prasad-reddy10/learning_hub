import React, { useState } from "react";

const Module3 = () => {
  const questions = [
    {
      question: "Which HTML tag is used to get user input?",
      options: ["<button>", "<label>", "<input>", "<span>"],
      answer: "<input>",
    },
    {
      question: "Which JavaScript function is used to respond to button clicks?",
      options: ["addClick", "clickEvent", "addEventListener", "onClickFunction"],
      answer: "addEventListener",
    },
    {
      question: "What is the correct operator for multiplication in JavaScript?",
      options: ["x", "*", "X", "**"],
      answer: "*",
    },
    {
      question: "How do you display a result on the page using JavaScript?",
      options: ["print()", "document.write()", "console.show()", "innerHTML"],
      answer: "innerHTML",
    },
    {
      question: "What will `parseInt('10')` return?",
      options: ["10", "'10'", "NaN", "undefined"],
      answer: "10",
    },
    {
      question: "Which function performs string to number conversion?",
      options: ["convertToInt()", "toInteger()", "parseInt()", "NumberCast()"],
      answer: "parseInt()",
    },
    {
      question: "Which event is used to trigger the calculator operation?",
      options: ["click", "input", "hover", "submit"],
      answer: "click",
    },
    {
      question: "How to get the value of an input element in JavaScript?",
      options: ["element.innerText", "element.getValue()", "element.value", "element.inputValue"],
      answer: "element.value",
    },
    {
      question: "Which operator is used for division in JavaScript?",
      options: ["/", ":", "div", "\\"],
      answer: "/",
    },
    {
      question: "Where do we write JavaScript in a web page?",
      options: ["<js>", "<script>", "<javascript>", "<code>"],
      answer: "<script>",
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
      <h2>Module 3: Mini Calculator</h2>
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
