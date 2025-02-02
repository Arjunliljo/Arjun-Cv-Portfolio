import { useSelector } from "react-redux";
import ContactNowBtn from "../Utility/Buttons/ContactNowBtn";
import GitHubSvg from "../Utility/SmallUtilities/GitHubSvg";
import InstaSvg from "../Utility/SmallUtilities/InstaSvg";
import LinkedInSvg from "../Utility/SmallUtilities/LinkedInSvg";
import TextBox from "./TextBox";
import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import { useSection } from "../../Context/SectionContext";
import { useObserver } from "../../Hooks/useObeserver";
import { setIsHeader } from "../../App/features/headerSlice";
import useMousePosition from "../../Hooks/useMousePosition";

function Header({ children }) {
  const isHeader = useSelector((state) => state.header.isHeader);
  const { isMobile } = useSection();

  const headerElement = useRef("");
  const threshold = isMobile ? 0 : 0.4;

  const [callBack] = useObserver(setIsHeader, true, false);
  const headerObserver = useMemo(() => {
    return new IntersectionObserver(callBack, {
      root: null,
      threshold,
    });
  }, [callBack, threshold]);

  useEffect(() => {
    if (headerElement.current) {
      headerObserver.observe(headerElement.current);
    }
    return () => {
      if (headerElement.current) {
        headerObserver.unobserve(headerElement.current);
      }
    };
  }, [headerObserver]);

  return (
    <header ref={headerElement}>
      {children}

      <div className="header">
        <canvas id="canvas"></canvas>

        <div className="header__social">
          <GitHubSvg />
          <LinkedInSvg />
          <InstaSvg />
        </div>
        <TextBox />
        <div className="main-img-container">
          <img
            src="./img/myimg.JPG"
            className="main-img"
            alt="Web developer Arjun Cv"
          />
        </div>
        <ContactNowBtn>Contact Now</ContactNowBtn>
      </div>
    </header>
  );
}

export default Header;
