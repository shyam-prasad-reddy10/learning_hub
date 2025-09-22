import React from "react";

const PostgreSQLHome = () => {
  return (
    <div>
      <h1>PostgreSQL Home</h1>
      <p>Welcome to the PostgreSQL Home page. Learn about PostgreSQL here!</p>

      <h2>Learning by Doing</h2>
      <p>
        In this tutorial, you get a step-by-step guide on how to install and create a PostgreSQL database. 
        You will learn how to create a project where you can create, read, update, and delete data.
      </p>
      <p>
        You will learn how to query, filter, and sort data from the database.
      </p>

      <h2>Examples in Each Chapter</h2>
      <p>
        In the tutorial, we will use examples to show what SQL statements return from the database:
      </p>

      <div style={{ backgroundColor: "#f8f9fa", padding: "15px", borderRadius: "5px", marginTop: "20px" }}>
        <h3>Example</h3>
        <p>Sort the table by year:</p>
        <pre style={{ backgroundColor: "#000", color: "#fff", padding: "10px", borderRadius: "5px" }}>
          SELECT * FROM cars<br />
          ORDER BY year;
        </pre>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default PostgreSQLHome;