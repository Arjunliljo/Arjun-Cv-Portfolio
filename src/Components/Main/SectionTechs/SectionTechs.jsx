import { useSelector } from "react-redux";
import Headings from "../../Utility/Headings";
import Slider from "../../Utility/Slider/Slider";
import TechContent from "./TechContent/TechContent";
import TechsBg from "./TechsBg";
import { useObserver } from "../../../Hooks/useObeserver";
import { setIsTech } from "../../../App/features/techSlice";
import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import { useSection } from "../../../Context/SectionContext";
import styles from "./SectionTechs.module.css";

function SectionTechs() {
  const isTech = useSelector((state) => state.tech.isTech);
  const [callBack] = useObserver(setIsTech, true, false);
  const techSection = useRef(null);
  const [pause, setIsPause] = useState(false);
  const { isMobile, isTab } = useSection();

  const techObserver = useMemo(() => {
    return new IntersectionObserver(callBack, {
      root: null,
      threshold: 0,
      rootMargin: "200px",
    });
  });
  useEffect(() => {
    if (techSection.current) {
      techObserver.observe(techSection.current);
    }
    return () => {
      if (techSection.current) {
        return techObserver.unobserve(techSection.current);
      }
    };
  }, []);

  return (
    <section ref={techSection} className="section-stories" id="sectionTechs">
      {isTech && <TechsBg />}

      <Headings>{isMobile ? "Techs" : "Familier technologies"}</Headings>

      <Slider
        childWidth={isMobile ? "350px" : isTab ? "600px" : "900px"}
        items={1}
        auto={true}
        pause={pause}
      >
        <div className="tech__box">
          <TechContent tech="git" />
          <TechContent tech="sass" />
        </div>

        <div className="tech__box">
          <TechContent tech="photoshop" />
          <TechContent tech="gpt" />
        </div>

        <div className="tech__box">
          <TechContent tech="js" />
          <TechContent tech="java" />
        </div>
      </Slider>

      {(isMobile || isTab) && (
        <div
          class={styles.container}
          onClick={() => setIsPause((pause) => !pause)}
        >
          <button class={styles.pause}>{pause ? "Play" : "Pause"}</button>
        </div>
      )}
    </section>
  );
}

export default SectionTechs;
