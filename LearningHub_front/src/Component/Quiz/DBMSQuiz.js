import { Link } from 'react-router-dom';

const DBMSQuiz = () => {
  return (
    <div className="container my-5">
      <h3 className="fw-bold mb-4 text-primary">DBMS Quiz Modules</h3>
      {[1, 2, 3, 4, 5].map(num => (
        <Link key={num} to={`/quiz/dbms/module${num}`} className="btn btn-outline-primary d-block mb-3">
          Module {num}
        </Link>
      ))}
    </div>
  );
};

export default DBMSQuiz;
