import { useState } from "preact/hooks";
import NavList from "./NavList";

function Navigation() {
  const [checked, setIsChecked] = useState(false);

  return (
    <div className="navigation">
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

      <div className="navigation__background" aria-hidden="true"></div>
      <div className="navigation__background-2" aria-hidden="true"></div>

      <nav
        className="navigation__nav"
        id="navigationMenu"
        aria-label="Main navigation"
      >
        <NavList onChecked={setIsChecked} />
      </nav>
    </div>
  );
}

export default Navigation;
