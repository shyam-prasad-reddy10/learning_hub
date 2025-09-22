// src/Component/dbms/Module3.js
import React, { useState } from 'react';

const questions = [
  {
    question: 'In a gradebook, which of the following columns is most likely to be used to categorize a student\'s performance?',
    options: ['Score', 'Subject', 'Grade', 'Name'],
    answer: 2
  },
  {
    question: 'Which formula would you use in Google Sheets or Excel to calculate the average score for a group of students?',
    options: ['SUM()', 'AVERAGE()', 'COUNT()', 'MAX()'],
    answer: 1
  },
  {
    question: 'To automatically assign a grade based on a student\'s score, which formula can you use in Excel?',
    options: ['SUM()', 'IF()', 'AVERAGE()', 'VLOOKUP()'],
    answer: 1
  },
  {
    question: 'If a student scores 35 in a subject, and the grade for scores below 40 is "Fail", which formula would be used to assign a grade?',
    options: [
      'IF(35 < 40, "Fail", "Pass")',
      'IF(35 < 40, "Pass", "Fail")',
      'IFS(35 < 40, "Fail")',
      'IF(35 > 40, "Fail", "Pass")'
    ],
    answer: 0
  },
  {
    question: 'Which function in Excel or Google Sheets can be used to highlight cells that have a score below 40?',
    options: ['Conditional Formatting', 'Data Validation', 'Auto-fill', 'Formulas'],
    answer: 0
  },
  {
    question: 'What is the purpose of conditional formatting in a gradebook?',
    options: [
      'To sort data based on grades',
      'To calculate the average score',
      'To highlight cells based on conditions, like low scores',
      'To auto-generate grades'
    ],
    answer: 2
  },
  {
    question: 'How do you calculate the average score per subject in Google Sheets or Excel?',
    options: [
      'Use SUM() for each subject',
      'Use AVERAGE() for each subject\'s scores',
      'Manually divide the total by the number of subjects',
      'Use COUNT() for each subject\'s scores'
    ],
    answer: 1
  },
  {
    question: 'Which of the following formulas would you use to sum the scores for a group of students?',
    options: ['SUM()', 'AVERAGE()', 'IF()', 'COUNT()'],
    answer: 0
  },
  {
    question: 'What kind of chart is typically used to show the average score per subject?',
    options: ['Line Chart', 'Pie Chart', 'Bar Chart', 'Scatter Plot'],
    answer: 2
  },
  {
    question: 'In Excel or Google Sheets, what happens when you apply auto-fill to a column with formulas?',
    options: [
      'The formula will be copied exactly to each cell',
      'The formula will adjust to each cell’s relative position',
      'The formula will remain static',
      'The formula will be ignored'
    ],
    answer: 1
  }
];

const Module3 = () => {
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
      <h3 className="fw-bold mb-4 text-primary">Gradebook Tracker – Module 3 Quiz</h3>
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

export default Module3;
