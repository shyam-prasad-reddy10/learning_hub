import React from "react";

const InsertInto = () => {
  return (
    <div>
      <h1>PostgreSQL INSERT INTO</h1>
      <p>
        The <code>INSERT INTO</code> statement in PostgreSQL is used to add new rows to a table. You can insert data into all columns or specific columns of a table.
      </p>
      <h2>Syntax</h2>
      <pre>
        <code>
          INSERT INTO table_name (column1, column2, ...)
          VALUES (value1, value2, ...);
        </code>
      </pre>
      <h2>Example</h2>
      <p>Consider a table named <code>employees</code>:</p>
      <pre>
        <code>
          INSERT INTO employees (id, name, salary)
          VALUES (1, 'John Doe', 50000);
        </code>
      </pre>
      <p>This query inserts a new row into the <code>employees</code> table with the specified values.</p>
    </div>
  );
};

export default InsertInto;