import React, { Suspense, lazy } from "react";

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
      </Suspense>
    </main>
  );
}

export default Main;
