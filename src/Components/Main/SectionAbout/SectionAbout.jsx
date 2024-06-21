import { useRef, useEffect, useMemo, useState } from "preact/hooks";
import { useSection } from "../../../Context/SectionContext";
import SecondaryBtn from "../../Utility/Buttons/SecondaryBtn";
import Headings from "../../Utility/Headings";
import HeadingsThertiary from "../../Utility/HeadingsThertiary";
import Composition from "./Composition";
import { useObserver } from "../../../Hooks/useObeserver";
import { setIsAbout } from "../../../App/features/aboutSlice";
import { useSelector } from "react-redux";

function SectionAbout() {
  const isAbout = useSelector((state) => state.about.isAbout);
  const { isMobile } = useSection();
  const [callBack] = useObserver(setIsAbout, true, false);

  const threshold = isMobile ? 0 : 0.5;

  const aboutObserver = useMemo(() => {
    return new IntersectionObserver(callBack, {
      root: null,
      threshold,
    });
  }, [callBack, threshold]);

  const aboutSection = useRef(null);

  useEffect(() => {
    if (aboutSection.current) {
      aboutObserver.observe(aboutSection.current);
    }
    return () => {
      if (aboutSection.current) {
        aboutObserver.unobserve(aboutSection.current);
      }
    };
  }, [aboutObserver]);

  return (
    <section ref={aboutSection} className="section-about" id="sectionAbout">
      <Headings
        style={
          isAbout
            ? { transform: "rotate(0deg)", opacity: "1" }
            : { transform: "rotate(25deg)", opacity: "0" }
        }
        aria="about-heading"
      >
        About
      </Headings>

      <div className="section-about__grid">
        <div className="section-about__grid-c">
          <HeadingsThertiary>Building the Future</HeadingsThertiary>
          <p
            className="paragraph"
            style={
              isAbout ? { transform: "scaleX(1)" } : { transform: "scaleX(0)" }
            }
          >
            Having transitioned from the world of graphic design, I'm now a
            full-stack developer fueled by a passion for building dynamic
            experiences. With a year of coding under my belt and a love for
            tackling LeetCode challenges, I'm eager to leverage my creativity
            and technical skills to bring innovative solutions to life.
          </p>

          <HeadingsThertiary>From Design to Development</HeadingsThertiary>
          <p
            className="paragraph"
            style={
              isAbout ? { transform: "scaleX(1)" } : { transform: "scaleX(0)" }
            }
          >
            My journey in tech began with crafting visuals, but my passion
            evolved to building the interactive experiences behind them. Now, as
            a MERN Stack developer, I bridge design and development,
            transforming ideas into dynamic solutions.
          </p>

          <SecondaryBtn
            aria="linked In"
            hyper="https://www.linkedin.com/in/arjun-cv/"
          >
            Know more →
          </SecondaryBtn>
        </div>

        <div className="section-about__grid-c">
          <Composition aria-label="Graphical composition" />
        </div>
      </div>
    </section>
  );
}

export default SectionAbout;
