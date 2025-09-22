import React from 'react';

const Instructor = () => {
  return (
    <div>
      <h1>Instructor Dashboard</h1>

      <section className="my-5">
        <h2>Courses Created</h2>
        <ul>
          <li>React Basics</li>
          <li>Advanced Python</li>
        </ul>
      </section>

      <section className="my-5">
        <h2>Students Enrolled</h2>
        <ul>
          <li>John Doe</li>
          <li>Jane Smith</li>
        </ul>
      </section>

      <section className="my-5">
        <h2>Create a Quiz</h2>
        <button className="btn btn-primary">Create New Quiz</button>
      </section>

      <section className="my-5">
        <h2>Create a Course</h2>
        <button className="btn btn-primary">Create New Course</button>
      </section>
    </div>
  );
};

export default Instructor;
