import SecondaryBtn from "../../Utility/Buttons/SecondaryBtn";
import Headings from "../../Utility/Headings";
import HeadingsThertiary from "../../Utility/HeadingsThertiary";
import Composition from "./Composition";

function SectionAbout() {
  return (
    <section className="section-about" id="sectionAbout">
      <Headings>About</Headings>

      <div className="section-about__grid">
        <div className="section-about__grid-c">
          <HeadingsThertiary>Building the Future</HeadingsThertiary>
          <p className="paragraph">
            Having transitioned from the world of graphic design, I'm now a
            full-stack developer fueled by a passion for building dynamic
            experiences. With a year of coding under my belt and a love for
            tackling LeetCode challenges, I'm eager to leverage my creativity
            and technical skills to bring innovative solutions to life.
          </p>

          <HeadingsThertiary>From Design to Development</HeadingsThertiary>
          <p className="paragraph">
            My journey in tech began with crafting visuals, but my passion
            evolved to building the interactive experiences behind them. Now, as
            a MERN Stack developer, I bridge design and development,
            transforming ideas into dynamic solutions.
          </p>

          <SecondaryBtn hyper="https://www.linkedin.com/in/arjun-cv/">
            Know more →
          </SecondaryBtn>
        </div>

        <div className="section-about__grid-c">
          <Composition />
        </div>
      </div>
    </section>
  );
}

export default SectionAbout;
