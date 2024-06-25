import { useProject } from "../../../Hooks/useProject";

function FrontCard({ name, id }) {
  const { shortDesc, features } = useProject(name);

  return (
    <article className="card__side card__side--front">
      <header className={`card__picture card__picture--${id}`}></header>
      <h4 className="card__heading card__heading--1" aria-label="project title">
        <span className={`card__heading--span card__heading--span-${id}`}>
          {shortDesc}
        </span>
      </h4>
      <div className="card__details">
        <ul>
          {features.map((des) => (
            <li>{des}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default FrontCard;
