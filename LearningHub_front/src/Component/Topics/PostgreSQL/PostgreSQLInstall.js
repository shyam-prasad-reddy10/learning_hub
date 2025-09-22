import React from "react";

const PostgreSQLInstall = () => {
  return (
    <div>
      <h1>PostgreSQL Installation</h1>
      <p>
        Learn how to install PostgreSQL on your system. Follow the steps below to get started:
      </p>
      <ol>
        <li>Visit the official PostgreSQL website: <a href="https://www.postgresql.org/download/" target="_blank" rel="noopener noreferrer">PostgreSQL Downloads</a></li>
        <li>Choose your operating system (Windows, macOS, or Linux).</li>
        <li>Download the appropriate installer or package.</li>
        <li>Run the installer and follow the setup instructions.</li>
        <li>Verify the installation by running the <code>psql</code> command in your terminal.</li>
      </ol>
      <h2>Video Tutorial</h2>
      <video width="640" height="360" controls>
        <source src={process.env.PUBLIC_URL + "/videos/video1.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </div>
  );
};

export default PostgreSQLInstall;