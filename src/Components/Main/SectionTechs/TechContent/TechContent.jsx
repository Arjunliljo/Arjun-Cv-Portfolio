import findTech from "./findTech";

function TechContent({ tech }) {
  const curTech = findTech(tech);

  return (
    <div className="techs" role="region" aria-labelledby="story-header">
      <div className="story">
        <figure className="story__shape">
          <img
            src={curTech.src}
            alt={curTech.alt}
            className="story__image"
            role="img"
            aria-describedby="figcaption-id"
          />
          <figcaption id="figcaption-id" className="story__caption">
            {curTech.placeHolder}
          </figcaption>
        </figure>
        <div className="story__text">
          <h2 id="story-header" className="header-thertiary respond">
            {curTech.desc}
          </h2>
          <p>{curTech.paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default TechContent;
