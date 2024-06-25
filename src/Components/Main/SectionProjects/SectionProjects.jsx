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
      className="section-projects"
      id="sectionProjects"
      aria-labelledby="projects"
    >
      <Headings
        style={
          isProject
            ? { transform: "rotate(0deg)", opacity: 1 }
            : { transform: "rotate(25deg)", opacity: 0 }
        }
        aria="projects"
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
        <ProjectCard id={4} name="popcorn" />
        <ProjectCard id={6} name="worldwise" />
        <ProjectCard id={7} name="reactquiz" />
        <ProjectCard id={5} name="travelist" />
        <ProjectCard id={1} name="traveller" />
        <ProjectCard id={2} name="mapty" />
        <ProjectCard id={3} name="pigGame" />
      </Slider>
    </section>
  );
}

export default SectionProjects;
