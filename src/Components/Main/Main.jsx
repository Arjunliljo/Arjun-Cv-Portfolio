import SectionAbout from "./SectionAbout/SectionAbout";
import SectionCards from "./SectionCards/SectionCards";
import SectionContact from "./SectionContact/SectionContact";
import SectionProjects from "./SectionProjects/SectionProjects";
import SectionTechs from "./SectionTechs/SectionTechs";

function Main() {
  return (
    <main>
      <SectionAbout></SectionAbout>
      <SectionCards></SectionCards>
      <SectionProjects></SectionProjects>
      <SectionTechs />
      <SectionContact />
    </main>
  );
}

export default Main;
