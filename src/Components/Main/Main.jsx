import { useSelector } from "react-redux";
import SectionAbout from "./SectionAbout/SectionAbout";
import { useEffect, useRef } from "preact/hooks";
import { useSection } from "../../Context/SectionContext";
import SectionCards from "./SectionCards/SectionCards";

function Main() {
  return (
    <main>
      <SectionAbout></SectionAbout>
      <SectionCards></SectionCards>
    </main>
  );
}

export default Main;
