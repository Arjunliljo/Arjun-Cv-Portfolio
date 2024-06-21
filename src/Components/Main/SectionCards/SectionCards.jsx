import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import ExpressSvg from "../../Utility/SmallUtilities/ExpressSvg";
import MongoSvg from "../../Utility/SmallUtilities/MongoSvg";
import NodeSvg from "../../Utility/SmallUtilities/NodeSvg";
import ReactSvg from "../../Utility/SmallUtilities/ReactSvg";
import FeatureBox from "./FeatureBox";
import { useSection } from "../../../Context/SectionContext";
import { useObserver } from "../../../Hooks/useObeserver";
import { useSelector } from "react-redux";
import { setIsFeature } from "../../../App/features/featureSlice";

const img = new Image();

function SectionCards() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-97395.jpg?t=st=1709482773~exp=1709486373~hmac=e13e6ec0d99fce76bf237fab325a80436fd2f6bbd6ea98f37bc37ccd46541f8f&w=900";
    img.onload = () => {
      setImageLoaded(true);
      setImgSrc(img.src); // Once loaded, set the image source
    };
    img.onerror = () => {
      console.error("Failed to load image");
    };
  }, []);

  const isFeature = useSelector((state) => state.feature.isFeature);
  const [callBack] = useObserver(setIsFeature, true, false);
  const featureEl = useRef(null);
  const { isMobile } = useSection();

  const threshold = isMobile ? 0 : 0.3;

  const featureObserver = useMemo(() => {
    return new IntersectionObserver(callBack, {
      root: null,
      threshold,
    });
  }, [callBack, threshold]);

  useEffect(() => {
    if (featureEl.current) {
      featureObserver.observe(featureEl.current);
    }
    return () => {
      if (featureEl.current) {
        featureObserver.unobserve(featureEl.current);
      }
    };
  }, [featureObserver]);

  console.log(isFeature);

  return (
    <section
      ref={featureEl}
      className="section-features"
      id="sectionFeatureBox"
      style={{
        backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${
          imgSrc || "../img/featuresBg.png"
        })`,
      }}
    >
      <div className="section-features__row">
        <FeatureBox
          type="mongo"
          style={
            isFeature
              ? { transform: "translateY(0)" }
              : { transform: "translateY(8rem)" }
          }
        >
          <MongoSvg />
        </FeatureBox>

        <FeatureBox
          type="express"
          style={
            isFeature
              ? { transform: "translateY(0)" }
              : { transform: "translateY(16rem)" }
          }
        >
          <ExpressSvg />
        </FeatureBox>

        <FeatureBox
          type="react"
          style={
            isFeature
              ? { transform: "translateY(0)" }
              : { transform: "translateY(32rem)" }
          }
        >
          <ReactSvg />
        </FeatureBox>

        <FeatureBox
          type="node"
          style={
            isFeature
              ? { transform: "translateY(0)" }
              : { transform: "translateY(62rem)" }
          }
        >
          <NodeSvg />
        </FeatureBox>
      </div>
    </section>
  );
}

export default SectionCards;
