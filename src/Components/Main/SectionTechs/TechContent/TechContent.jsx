import findTech from "./findTech";

function TechContent({ tech }) {
  const curTech = findTech(tech);
  console.log(curTech);
  return (
    <div className="techs">
      <div className="story">
        <figure className="story__shape">
          <img src={curTech.src} alt={curTech.alt} className="story__image" />
          <figcaption className="story__caption">
            {curTech.placeHolder}
          </figcaption>
        </figure>
        <div className="story__text">
          <h3 className="header-thertiary respond">{curTech.desc}</h3>
          <p>{curTech.paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default TechContent;
