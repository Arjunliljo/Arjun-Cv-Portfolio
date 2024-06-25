import { useSelector } from "react-redux";
import { useProject } from "../../Hooks/useProject";

function Popup() {
  const name = useSelector((state) => state.project.popupProject);
  const { desciption, projectName, thumbnail, live, git } = useProject(name);

  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src={thumbnail} alt="project thumbnail" className="popup__img" />
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">
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
            >
              Visit →
            </a>
            <a
              href={git}
              target="_blank"
              className="btn btn-blue project-github"
              style={{ marginLeft: ".8rem" }}
            >
              Repository →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
