import { useSelector } from "react-redux";

function Composition() {
  const isAbout = useSelector((state) => state.about.isAbout);

  return (
    <div
      className="composition"
      style={isAbout ? { transform: "scale(1)" } : { transform: "scale(0)" }}
    >
      <a
        href="https://www.testdome.com/certificates/42a562f12b5144ba880827e9d1931c9c"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="img/ReactCertificate.webp"
          alt="React Certificate 1"
          className="composition__photo composition__photo--p1"
        />
      </a>
      <a
        href="https://www.testdome.com/certificates/42a562f12b5144ba880827e9d1931c9c"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="img/ReactCertificate.webp"
          alt="React Certificate 2"
          className="composition__photo composition__photo--p2"
        />
      </a>
      <a
        href="https://www.testdome.com/certificates/42a562f12b5144ba880827e9d1931c9c"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="img/ReactCertificate.webp"
          alt="React Certificate 3"
          className="composition__photo composition__photo--p3"
        />
      </a>
    </div>
  );
}

export default Composition;
