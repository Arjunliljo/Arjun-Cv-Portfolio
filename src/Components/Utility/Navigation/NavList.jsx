import React from "react";

function NavList({ onChecked }) {
  return (
    <nav aria-label="Main Navigation">
      <ul className="navigation__list">
        <li
          className="navigation__item navHome"
          onClick={() => onChecked(false)}
        >
          <a href="/" className="navigation__link" aria-label="Home">
            Home
          </a>
        </li>
        <li
          className="navigation__item navAbout"
          onClick={() => onChecked(false)}
        >
          <a
            href="#sectionAbout"
            className="navigation__link"
            aria-label="About Section"
          >
            About
          </a>
        </li>
        <li
          className="navigation__item navSkills"
          onClick={() => onChecked(false)}
        >
          <a
            href="#sectionProjects"
            className="navigation__link"
            aria-label="Projects Section"
          >
            Projects
          </a>
        </li>
        <li
          className="navigation__item navTechs"
          onClick={() => onChecked(false)}
        >
          <a
            href="#sectionTechs"
            className="navigation__link"
            aria-label="Techs Section"
          >
            Techs
          </a>
        </li>
        <li
          className="navigation__item navContact"
          onClick={() => onChecked(false)}
        >
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
