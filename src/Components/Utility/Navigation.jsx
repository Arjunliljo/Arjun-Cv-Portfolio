import { useState } from "preact/hooks";
import { NavLink } from "react-router-dom";

function Navigation() {
  const [checked, setIsChecked] = useState(false);

  return (
    <div className="navigation">
      {/* Navigation toggle checkbox */}
      <input
        checked={checked}
        onClick={() => setIsChecked((checked) => !checked)}
        type="checkbox"
        className="navigation__checkbox"
        id="navi__toggle"
        aria-label="Toggle navigation"
      />
      <label
        htmlFor="navi__toggle"
        className="navigation__btn"
        aria-controls="navigationMenu"
      >
        <span className="navigation__icon">&nbsp;</span>
      </label>
      {/* Background */}
      <div className="navigation__background" aria-hidden="true"></div>
      <div className="navigation__background-2" aria-hidden="true"></div>
      {/* Navigation lists */}
      <nav
        className="navigation__nav"
        id="navigationMenu"
        aria-label="Main navigation"
      >
        <ul className="navigation__list">
          <li className="navigation__item navHome">
            <NavLink to="/" className="navigation__link">
              Home
            </NavLink>
          </li>
          <li className="navigation__item navAbout">
            <NavLink to="/#sectionAbout" className="navigation__link">
              About
            </NavLink>
          </li>
          <li className="navigation__item navSkills">
            <NavLink to="/#section-tours" className="navigation__link">
              Projects
            </NavLink>
          </li>
          <li className="navigation__item navTechs">
            <NavLink to="/#sectionTechs" className="navigation__link">
              Techs
            </NavLink>
          </li>
          <li className="navigation__item navContact">
            <NavLink to="/#sectionContact" className="navigation__link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
