import { useDispatch } from "react-redux";
import { setPopupProject } from "../../../App/features/projectSlice";

function BackCard({ id, name }) {
  const dispatch = useDispatch();
  return (
    <article className={`card__side card__side--back card__side--back-${id}`}>
      <div className="card__cta">
        <div className="card__price-box">
          <div className="card__price-only">Only</div>
          <div className="card__price-value">front end</div>
          <a
            href="#popup"
            className="btn btn-white book-now traveller-btn"
            onClick={() => {
              dispatch(setPopupProject(name));
            }}
          >
            Check out
          </a>
        </div>
      </div>
    </article>
  );
}

export default BackCard;
