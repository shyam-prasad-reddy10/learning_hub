import React from "react";

const Update = () => {
  return (
    <div>
      <h1>PostgreSQL UPDATE</h1>
      <p>
        The <code>UPDATE</code> statement in PostgreSQL is used to modify existing records in a table. You can update one or more rows based on a condition.
      </p>
      <h2>Syntax</h2>
      <pre>
        <code>
          UPDATE table_name
          SET column1 = value1, column2 = value2, ...
          WHERE condition;
        </code>
      </pre>
      <h2>Example</h2>
      <p>Consider a table named <code>employees</code>:</p>
      <pre>
        <code>
          UPDATE employees
          SET salary = 60000
          WHERE id = 1;
        </code>
      </pre>
      <p>This query updates the salary of the employee with <code>id = 1</code> to 60,000.</p>
    </div>
  );
};

export default Update;