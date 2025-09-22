import React from "react";

const CreateTable = () => {
  return (
    <div>
      <h1>PostgreSQL CREATE TABLE</h1>
      <p>
        The <code>CREATE TABLE</code> statement in PostgreSQL is used to create a new table in the database. You can define the table structure, including columns and their data types.
      </p>
      <h2>Syntax</h2>
      <pre>
        <code>
          CREATE TABLE table_name (
            column1 data_type constraint,
            column2 data_type constraint,
            ...
          );
        </code>
      </pre>
      <h2>Example</h2>
      <p>Here’s an example of creating a table named <code>employees</code>:</p>
      <pre>
        <code>
          CREATE TABLE employees (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            salary NUMERIC(10, 2),
            department VARCHAR(50)
          );
        </code>
      </pre>
      <p>This query creates a table with columns for <code>id</code>, <code>name</code>, <code>salary</code>, and <code>department</code>.</p>
    </div>
  );
};

export default CreateTable;