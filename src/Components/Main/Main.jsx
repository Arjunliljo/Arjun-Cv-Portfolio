import React, { Suspense, lazy } from "react";
import Popup from "../Popup/Popup";
import ContactPopup from "../Popup/ContactPopup";

const LazySectionAbout = lazy(() => import("./SectionAbout/SectionAbout"));
const LazySectionCards = lazy(() => import("./SectionCards/SectionCards"));
const LazySectionProjects = lazy(() =>
  import("./SectionProjects/SectionProjects")
);
const LazySectionTechs = lazy(() => import("./SectionTechs/SectionTechs"));
const LazySectionContact = lazy(() =>
  import("./SectionContact/SectionContact")
);

function Main() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <LazySectionAbout />
        <LazySectionCards />
        <LazySectionProjects />
        <LazySectionTechs />
        <LazySectionContact />
        <Popup />
      </Suspense>
    </main>
  );
}

export default Main;
