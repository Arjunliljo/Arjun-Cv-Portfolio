import Headings from "../../Utility/Headings";
import Slider from "../../Utility/Slider/Slider";

import FrontCard from "./FrontCard";
import ProjectCard from "./ProjectCard";

function SectionProjects() {
  return (
    <section
      className="section-projects u-margin-top-big"
      id="section-projects"
    >
      <Headings>Projects</Headings>

      <Slider>
        <ProjectCard type="frontEnd" id={1} name="traveller" />
        <ProjectCard type="frontEnd" id={2} name="mapty" />
        <ProjectCard type="frontEnd" id={3} name="pigGame" />
        <ProjectCard type="frontEnd" id={3} name="pigGame" />
        <ProjectCard type="frontEnd" id={3} name="pigGame" />
        <ProjectCard type="frontEnd" id={3} name="pigGame" />
      </Slider>

      <div className="u-center-text">
        {/* <button class="btn btn-blue more-btn">More</button> */}
      </div>
    </section>
  );
}

export default SectionProjects;

{
  /* <div className="section-projects__col u-margin-bottom-mid">
<div className="card">
  <div className="card__side card__side--front">
    <div className="card__picture card__picture--2"></div>
    <h4 className="card__heading card__heading--1">
      <span className="card__heading--span card__heading--span-2">
        The Live Map
      </span>
    </h4>
    <div className="card__details">
      <ul>
        <li>OOP Design</li>
        <li>Map Integration</li>
        <li>LocalStorage</li>
        <li>Responsiveness</li>
        <li>Interactivity</li>
      </ul>
    </div>
  </div>
  <div className="card__side card__side--back card__side--back-2">
    <div className="card__cta">
      <div className="card__price-box">
        <div className="card__price-only">Only</div>
        <div className="card__price-value">front end</div>
        <a href="#popup" className="btn btn-white book-now mapty-btn">
          Check out
        </a>
      </div>
    </div>
  </div>
</div>
</div> */
}
