import React, { useState } from "react";

const Module2 = () => {
  const questions = [
    {
      question: "What HTML element is typically used to structure a product card?",
      options: ["<section>", "<card>", "<div>", "<main>"],
      answer: "<div>",
    },
    {
      question: "Which CSS property adds space *inside* the border of an element?",
      options: ["margin", "padding", "border", "outline"],
      answer: "padding",
    },
    {
      question: "Which CSS property is used to set background color?",
      options: ["bgcolor", "background", "color", "background-color"],
      answer: "background-color",
    },
    {
      question: "What selector targets an element with class 'card'?",
      options: [".card", "#card", "card", "*card"],
      answer: ".card",
    },
    {
      question: "Which property changes the border of a card?",
      options: ["box-shadow", "outline", "border", "padding"],
      answer: "border",
    },
    {
      question: "Which layout model includes content, padding, border, and margin?",
      options: ["Flexbox", "Grid", "Box Model", "Inline Model"],
      answer: "Box Model",
    },
    {
      question: "How do you create a hover effect in CSS?",
      options: ["hover:button {}", "button.hover {}", "button:hover {}", "button onHover"],
      answer: "button:hover {}",
    },
    {
      question: "What does 'margin' affect in the box model?",
      options: ["Inside content", "Between border and padding", "Outside the border", "Text spacing"],
      answer: "Outside the border",
    },
    {
      question: "Which tag is best for product name?",
      options: ["<h1>", "<p>", "<div>", "<img>"],
      answer: "<h1>",
    },
    {
      question: "Which CSS unit is best for responsive padding?",
      options: ["px", "em", "pt", "rem"],
      answer: "rem",
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
 