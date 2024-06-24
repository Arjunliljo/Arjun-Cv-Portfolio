function FooterNav() {
  return (
    <nav aria-label="Footer Navigation" className="footer__navigation">
      <ul className="footer__list">
        <li className="footer-item home">
          <a href="#" className="footer__link">
            Home
          </a>
        </li>
        <li className="footer-item about">
          <a href="#sectionAbout" className="footer__link">
            About
          </a>
        </li>
        <li className="footer-item contact">
          <a href="#sectionContact" className="footer__link">
            Contact
          </a>
        </li>
        <li className="footer-item projects">
          <a href="#section-tours" className="footer__link">
            Projects
          </a>
        </li>
        <li className="footer-item terms">
          <a href="#" className="footer__link">
            Terms and Conditions
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
