import Loader from "../Utility/Spinner/Loader";
import CopyRight from "./CopyRight";
import FooterLogo from "./FooterLogo";
import FooterNav from "./FooterNav";

function Footer() {
  return (
    <footer className="footer">
      <FooterLogo />
      <div className="footer__row">
        <div className="footer__col">
          <FooterNav />
        </div>

        <div className="footer__col">
          <CopyRight />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
