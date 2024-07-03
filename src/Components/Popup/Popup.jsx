import { useSelector } from "react-redux";
import { useProject } from "../../Hooks/useProject";
import { Link } from "react-router-dom";

function Popup() {
  const name = useSelector((state) => state.project.popupProject);
  const { description, projectName, thumbnail, live, git } = useProject(name);
  return (
    <aside
      className="popup"
      id="popup"
      role="dialog"
      aria-labelledby="project-title"
      aria-describedby="project-description"
    >
      <div className="popup__content">
        <div className="popup__left">
          <img
            src={thumbnail}
            alt={`Thumbnail of ${projectName}`}
            className="popup__img"
          />
        </div>
        <div className="popup__right">
          <a
            href="#section-tours"
            className="popup__close"
            aria-label="Close popup"
          >
            ×
          </a>
          <h2 id="project-title" className="heading-secondary">
            {projectName}
          </h2>
          <h3 className="heading-tertiary">Overview</h3>
          <p id="project-description" className="popup__text">
            {description}
          </p>
          <div>
            <Link
              to={`${live}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-blue project-live"
              aria-label={`Visit live site`}
            >
              Visit →
            </Link>
            <Link
              to={`${git}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-blue project-github"
              style={{ marginLeft: ".8rem" }}
              aria-label={`View repository`}
            >
              Repository →
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Popup;
