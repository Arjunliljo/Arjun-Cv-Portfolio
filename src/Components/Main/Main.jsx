import { useSelector } from "react-redux";
import SectionAbout from "./SectionAbout/SectionAbout";
import { useEffect, useRef } from "preact/hooks";
import { useSection } from "../../Context/SectionContext";

function Main() {
  const currentState = useSelector((state) => state.event);

  console.log(currentState);

  return (
    <main>
      <SectionAbout></SectionAbout>
    </main>
  );
}

export default Main;
