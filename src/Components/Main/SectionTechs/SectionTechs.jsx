import Headings from "../../Utility/Headings";
import Slider from "../../Utility/Slider/Slider";
import TechContent from "./TechContent/TechContent";
import TechsBg from "./TechsBg";

function SectionTechs() {
  return (
    <section className="section-stories" id="sectionTechs">
      <TechsBg />

      <Headings>Familier technologies</Headings>

      {/* <div className="tech__box">
        <TechContent tech="git" />
        <TechContent tech="sass" />
      </div> */}

      <Slider childWidth="900px" items={1} auto={true}>
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
    </section>
  );
}

export default SectionTechs;
