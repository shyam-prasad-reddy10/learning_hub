import React from "react";

const Delete = () => {
  return (
    <div>
      <h1>PostgreSQL DELETE</h1>
      <p>
        The <code>DELETE</code> statement in PostgreSQL is used to remove rows from a table. You can delete specific rows based on a condition or all rows in a table.
      </p>
      <h2>Syntax</h2>
      <pre>
        <code>
          DELETE FROM table_name
          WHERE condition;
        </code>
      </pre>
      <h2>Example</h2>
      <p>Consider a table named <code>employees</code>:</p>
      <pre>
        <code>
          DELETE FROM employees
          WHERE id = 1;
        </code>
      </pre>
      <p>This query deletes the row where the <code>id</code> is <code>1</code>.</p>
      <h2>Delete All Rows</h2>
      <pre>
        <code>
          DELETE FROM employees;
        </code>
      </pre>
      <p>This query deletes all rows from the <code>employees</code> table.</p>
    </div>
  );
};

export default Delete;