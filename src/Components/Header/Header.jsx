import ContactNowBtn from "../Utility/ContactNowBtn";
import GitHubSvg from "../Utility/SmallUtilities/GitHubSvg";
import InstaSvg from "../Utility/SmallUtilities/InstaSvg";
import LinkedInSvg from "../Utility/SmallUtilities/LinkedInSvg";
import TextBox from "./TextBox";

function Header({ children }) {
  return (
    <header>
      {children}

      <div className="header">
        <GitHubSvg />
        <LinkedInSvg />
        <InstaSvg />

        <TextBox />

        <img
          src="./img/Arjun-Cv-main.png"
          className="main-img"
          alt="Web developer Arjun Cv"
        />
        <ContactNowBtn>Contact Now</ContactNowBtn>
      </div>
    </header>
  );
}

export default Header;
