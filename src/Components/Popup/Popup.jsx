import { useSelector } from "react-redux";
import { useProject } from "../../Hooks/useProject";

function Popup() {
  const name = useSelector((state) => state.project.popupProject);
  const { desciption, projectName, thumbnail, live, git } = useProject(name);

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
          <img src={thumbnail} alt={`thumbnail`} className="popup__img" />
        </div>
        <div className="popup__right">
          <a
            href="#section-tours"
            className="popup__close"
            aria-label="Close popup"
          >
            ×
          </a>
          <h2 className="heading-secondary">{projectName}</h2>
          <h3 className="heading-thertiary">Overview</h3>
          <p className="popup__text">{desciption}</p>
          <div>
            <a
              href={live}
              target="_blank"
              className="btn btn-blue project-live"
              aria-label={`Visit live site`}
            >
              Visit →
            </a>
            <a
              href={git}
              target="_blank"
              className="btn btn-blue project-github"
              style={{ marginLeft: ".8rem" }}
              aria-label={`View repository`}
            >
              Repository →
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Popup;
