import { useEffect, useMemo, useRef } from "preact/hooks";
import { setIsProject } from "../../../App/features/projectSlice";
import { useSection } from "../../../Context/SectionContext";
import { useObserver } from "../../../Hooks/useObeserver";
import Headings from "../../Utility/Headings";
import Slider from "../../Utility/Slider/Slider";
import ProjectCard from "./ProjectCard";
import { useSelector } from "react-redux";

function SectionProjects() {
  const isProject = useSelector((state) => state.project.isProject);

  const { isMobile, isTab } = useSection();
  const [callBack] = useObserver(setIsProject, true, false);

  const threshold = isMobile ? 0 : 0.3;

  const projectObserver = useMemo(() => {
    return new IntersectionObserver(callBack, {
      root: null,
      threshold,
    });
  }, [callBack, threshold]);

  const projectSection = useRef(null);

  useEffect(() => {
    if (projectSection.current) {
      projectObserver.observe(projectSection.current);
    }
    return () => {
      if (projectSection.current) {
        projectObserver.unobserve(projectSection.current);
      }
    };
  }, [projectObserver]);

  return (
    <section
      ref={projectSection}
      className="section-projects u-margin-top-big"
      id="section-projects"
    >
      <Headings
        style={
          isProject
            ? { transform: "rotate(0deg)", opacity: 1 }
            : { transform: "rotate(25deg)", opacity: 0 }
        }
        aria="project"
      >
        Projects
      </Headings>

      <Slider
        items={isMobile ? 1 : isTab ? 2 : 3}
        childWidth={isMobile ? "220px" : "280px"}
        sliderStyle={
          isProject
            ? {
                transform: "scaleX(1)",
              }
            : {
                transform: "scaleX(0)",
              }
        }
      >
        <ProjectCard type="frontEnd" id={1} name="traveller" />
        <ProjectCard type="frontEnd" id={2} name="mapty" />
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
