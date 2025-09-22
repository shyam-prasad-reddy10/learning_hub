import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Public Pages
import HomePage from "./Component/HomePage";
import Register from "./Component/Register";
import Login from "./Component/Login";
import Instructor from "./Component/Instructor";
import Student from "./Component/Student";
import Contact from "./Component/Contact";
import AboutUs from "./Component/Aboutus";
import FAQ from "./Component/FAQ";
import Profile from "./Component/Profile";

// Course Pages
import SidebarLayout from './Component/SidebarLayout';
import Course from './Component/Course';
import Assignment from './Component/Assignment';
import Quiz from './Component/Quiz';
import Achievements from './Component/Achievements';

// DBMS Quiz Pages
import DBMSQuizPage from './Component/DBMSQuizPage';
import Module1 from './Component/dbms/Module1';
import Module2 from './Component/dbms/Module2';
import Module3 from './Component/dbms/Module3';
import Module4 from "./Component/dbms/Module4";


// Dev Quiz Pages
import DevQuizPage from './Component/DevQuizPage';
import DevModule1 from './Component/dev/Module1';
import DevModule2 from './Component/dev/Module2';
import DevModule3 from './Component/dev/Module3';
import DevModule4 from './Component/dev/Module4';

// WebPage Quiz Pages
import WebPageQuiz from './Component/WebPageQuiz';
import WebModule1 from './Component/webpage/Module1';
import ModulePage from "./Component/ModulePage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student" element={<Student />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/profile" element={<Profile />} />

        {/* Routes with SidebarLayout */}
        <Route path="/" element={<SidebarLayout />}>
          {/* Sidebar Pages */}
          <Route path="courses" element={<Course />} />
          <Route path="/module/:moduleId" element={<ModulePage />} />
          <Route path="assignments" element={<Assignment />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="achievements" element={<Achievements />} />

          {/* DBMS Quiz Routes */}
          <Route path="quiz/dbms" element={<DBMSQuizPage />} />
          <Route path="quiz/dbms/module1" element={<Module1 />} />
          <Route path="quiz/dbms/module2" element={<Module2 />} />
          <Route path="quiz/dbms/module3" element={<Module3 />} />
          <Route path="quiz/dbms/module4" element={<Module4 />} />
          

          {/* Dev Quiz Routes */}
          <Route path="quiz/dev" element={<DevQuizPage />} />
          <Route path="quiz/dev/module1" element={<DevModule1 />} />
          <Route path="quiz/dev/module2" element={<DevModule2 />} />
          <Route path="quiz/dev/module3" element={<DevModule3 />} />
          <Route path="quiz/dev/module4" element={<DevModule4 />} />

          {/* WebPage Quiz Routes */}
          <Route path="quiz/webpage" element={<WebPageQuiz />} />
          <Route path="quiz/webpage/module1" element={<WebModule1 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
