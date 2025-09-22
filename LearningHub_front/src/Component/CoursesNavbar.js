import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Css/CoursesNavbar.css";

const CoursesNavbar = () => {
  const [activeCourse, setActiveCourse] = useState("PostgreSQL");

  const courses = [
    {
      name: "OS",
      topics: ["Processes", "Threads", "Memory Management", "File Systems"],
    },
    {
      name: "React JS",
      topics: ["Components", "State", "Props", "Hooks"],
    },
    {
      name: "Bootstrap",
      topics: ["Grid System", "Components", "Utilities"],
    },
    {
      name: "MySQL",
      topics: ["Create Table", "Insert Into", "SELECT", "UPDATE"],
    },
    {
      name: "PostgreSQL",
      topics: [
        "PostgreSQLHome",
        "PostgreSQLIntro",
        "PostgreSQLInstall",
        "PostgreSQLGetStarted",
        "PostgreSQLPgAdmin4",
        "CreateTable",
        "InsertInto",
        "Update",
        "Delete",

        "","",
        "PostgreSQL create table",
        "PostgreSQL insert into",
        "PostgreSQL Fetch Data",
        "PostgreSQL Add Coloumn",
        "PostgreSQL Update",
        "PostgreSQL Alter coloumn",
        "PostgreSQL drop coloumn",
        "PostgreSQL delete",
        "PostgreSQL drop table",
        "Create Demo Database",
      ],
    },
    {
      name: "C",
      topics: ["Variables", "Pointers", "Functions", "Structures"],
    },
    {
      name: "C++",
      topics: ["Classes", "Inheritance", "Polymorphism", "Templates"],
    },
  ];

  return (
    <div className="courses-navbar">
      {/* Top Navbar for Courses */}
      <div className="top-navbar">
        {courses.map((course) => (
          <button
            key={course.name}
            className={`course-button ${
              activeCourse === course.name ? "active" : ""
            }`}
            onClick={() => setActiveCourse(course.name)}
          >
            {course.name}
          </button>
        ))}
      </div>

      {/* Side Navbar for Topics */}
      <div className="side-navbar">
        <h3>{activeCourse} Topics</h3>
        <ul>
          {courses
            .find((course) => course.name === activeCourse)
            .topics.map((topic, index) => (
              <li key={index}>
                <Link to={`/topics/${topic}`}>{topic.replace(/([A-Z])/g, " $1").trim()}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CoursesNavbar;