import { useSelector } from "react-redux";
import { useSection } from "../../../Context/SectionContext";

function Composition() {
  const isAbout = useSelector((state) => state.about.isAbout);

  return (
    <div
      className="composition"
      style={isAbout ? { transform: "scale(1)" } : { transform: "scale(0)" }}
    >
      <img
        src="img/Certificate.png"
        alt="Photo 1"
        className="composition__photo composition__photo--p1"
      />
      <img
        src="img/Certificate.png"
        alt="Photo 2"
        className="composition__photo composition__photo--p2"
      />
      <img
        src="img/Certificate.png"
        alt="Photo 3"
        className="composition__photo composition__photo--p3"
      />
    </div>
  );
}

export default Composition;
