import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const FAQ = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center py-5">
      <div className="card shadow p-4 w-100" style={{ maxWidth: "600px" }}>
        <div className="mb-4">
          <p>
            <strong>What is Learning Hub?</strong><br />
            Learning Hub is an online platform that offers learning resources, quizzes, progress tracking, and certificates. It’s designed to support both students and instructors.
          </p>
        </div>

        <div className="mb-4">
          <p>
            <strong>How can I sign up as a student?</strong><br />
            Click on the "Sign Up" button on the homepage and select the "Student" role. Fill in your details and verify your email to start learning.
          </p>
        </div>

        <div className="mb-4">
          <p>
            <strong>What features are available for students?</strong><br />
            Students can access a wide range of learning materials, take quizzes, receive personalized course recommendations, and track their progress through a dashboard. Certificates are awarded upon course completion.
          </p>
        </div>

        <div className="mb-4">
          <p>
            <strong>How do instructors use the platform?</strong><br />
            Instructors can upload course materials, create quizzes and assignments, and evaluate student performance through the instructor dashboard.
          </p>
        </div>

        <div className="mb-4">
          <p>
            <strong>Can I download my certificate after completing a course?</strong><br />
            Yes, once you finish all required modules and quizzes in a course, you can download your certificate from your dashboard.
          </p>
        </div>

        <div className="mb-4">
          <p>
            <strong>Is Learning Hub free to use?</strong><br />
            Basic access is free for all users. Some advanced features or premium courses may require a subscription or one-time payment.
          </p>
        </div>

        <div className="mb-4">
          <p>
            <strong>How are courses recommended to students?</strong><br />
            The platform uses your interests, past activity, and progress data to recommend the most relevant and beneficial courses.
          </p>
        </div>

        <div>
          <p>
            <strong>Who do I contact for technical support?</strong><br />
            You can reach our support team via the "Contact Us" page or email us at{" "}
            <a href="mailto:support@learninghub.com">support@learninghub.com</a>.
          </p>
        </div>

        {/* Back to Homepage button */}
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={() => navigate("/home")}>
            <i className="bi bi-arrow-left me-1"></i> Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
