import { Link } from "react-router-dom";

function SecondaryBtn({ hyper, children, aria }) {
  if (hyper)
    return (
      <div className="btn-secondary-box">
        <Link
          to={hyper}
          className="btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={aria}
        >
          {children}
        </Link>
      </div>
    );

  return (
    <div className="btn-secondary-box">
      <button className="btn-secondary" aria-label={aria}>
        {children}
      </button>
      ;
    </div>
  );
}

export default SecondaryBtn;
