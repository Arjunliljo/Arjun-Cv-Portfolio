import { Children } from "preact/compat";

function FrontCard({ name, id }) {
  let shortDesc, features;

  switch (name) {
    case "traveller":
      shortDesc = "For The Travellers";

      features = [
        "Responsive",
        "Clean UI",
        "Animations",
        "Scalable",
        "Optimized",
      ];
      break;

    case "mapty":
      shortDesc = "The Live Map";
      features = [
        "OOP Design",
        "Map Integration",
        "Java Script",
        "Optimized",
        "Clean UI",
      ];
    case "pigGame":
      shortDesc = "The Live Map";
      features = [
        "Java Script",
        "Optimized",
        "Problem Solving",
        "Interactivity",
        "Clean UI",
      ];
  }

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
