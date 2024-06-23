import { useSelector } from "react-redux";
import SectionAbout from "./SectionAbout/SectionAbout";
import { useEffect, useRef } from "preact/hooks";
import { useSection } from "../../Context/SectionContext";
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
