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

function SectionCards() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = "./img/SectionFeaturesBg.webp";
    img.onload = () => {
      setImageLoaded(true);
      setImgSrc(img.src);
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
            isFeature ? { transform: "scale(1)" } : { transform: "scale(0)" }
          }
        >
          <MongoSvg />
        </FeatureBox>

        <FeatureBox
          type="express"
          style={
            isFeature ? { transform: "scale(1)" } : { transform: "scale(0)" }
          }
        >
          <ExpressSvg />
        </FeatureBox>

        <FeatureBox
          type="react"
          style={
            isFeature ? { transform: "scale(1)" } : { transform: "scale(0)" }
          }
        >
          <ReactSvg />
        </FeatureBox>

        <FeatureBox
          type="node"
          style={
            isFeature ? { transform: "scale(1)" } : { transform: "scale(0)" }
          }
        >
          <NodeSvg />
        </FeatureBox>
      </div>
    </section>
  );
}

export default SectionCards;
