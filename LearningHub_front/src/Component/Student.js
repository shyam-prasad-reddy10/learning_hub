import React from 'react';

const Student = () => {
  return (
    <div>
      <h1>Student Dashboard</h1>

      <section className="my-5">
        <h2>Course Catalog</h2>
        <ul>
          <li>React for Beginners</li>
          <li>Advanced JavaScript</li>
          <li>Data Science with Python</li>
          <li>Mobile App Development</li>
        </ul>
      </section>

      <section className="my-5">
        <h2>Course Recommendations</h2>
        <ul>
          <li>Full Stack Web Development</li>
          <li>Machine Learning with TensorFlow</li>
        </ul>
      </section>

      <section className="my-5">
        <h2>Certificates Achieved</h2>
        <ul>
          <li>React Developer Certification</li>
          <li>Python for Data Science</li>
        </ul>
      </section>

      <section className="my-5">
        <h2>Quizzes</h2>
        <p>Complete quizzes to test your knowledge and earn badges!</p>
      </section>
    </div>
  );
};

export default Student;
