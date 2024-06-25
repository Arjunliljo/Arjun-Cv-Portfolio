import React from "react";

function NavList() {
  return (
    <nav aria-label="Main Navigation">
      <ul className="navigation__list">
        <li className="navigation__item navHome">
          <a href="/" className="navigation__link" aria-label="Home">
            Home
          </a>
        </li>
        <li className="navigation__item navAbout">
          <a
            href="#sectionAbout"
            className="navigation__link"
            aria-label="About Section"
          >
            About
          </a>
        </li>
        <li className="navigation__item navSkills">
          <a
            href="#sectionProjects"
            className="navigation__link"
            aria-label="Projects Section"
          >
            Projects
          </a>
        </li>
        <li className="navigation__item navTechs">
          <a
            href="#sectionTechs"
            className="navigation__link"
            aria-label="Techs Section"
          >
            Techs
          </a>
        </li>
        <li className="navigation__item navContact">
          <a
            href="#sectionContact"
            className="navigation__link"
            aria-label="Contact Section"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavList;
