import Headings from "../../Utility/Headings";
import TechContent from "./TechContent/TechContent";
import TechsBg from "./TechsBg";

function SectionTechs() {
  return (
    <section className="section-stories" id="sectionTechs">
      <TechsBg />

      <Headings>Familier technologies</Headings>

      <div className="tech__box">
        <TechContent tech="git" />
        <TechContent tech="sass" />
        <TechContent tech="photoshop" />
        <TechContent tech="gpt" />
        <TechContent tech="js" />
        <TechContent tech="java" />


        {/* here more techs */}
      </div>
    </section>
  );
}

export default SectionTechs;
