import SectionAbout from "./SectionAbout/SectionAbout";
import SectionCards from "./SectionCards/SectionCards";
import SectionProjects from "./SectionProjects/SectionProjects";
import SectionTechs from "./SectionTechs/SectionTechs";

function Main() {
  return (
    <main>
      <SectionAbout></SectionAbout>
      <SectionCards></SectionCards>
      <SectionProjects></SectionProjects>
      <SectionTechs />
    </main>
  );
}

export default Main;
