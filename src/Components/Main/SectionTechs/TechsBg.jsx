import { useState, useRef, useEffect } from "react";
import { useSection } from "../../../Context/SectionContext";

function TechsBg() {
  const { isMobile } = useSection();
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleLoadedData = () => {
      setIsLoaded(true);
    };

    if (videoElement) {
      videoElement.addEventListener("loadeddata", handleLoadedData);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("loadeddata", handleLoadedData);
      }
    };
  }, []);

  return (
    <div className="bg__video" title="Background video of technology">
      {(!isLoaded || isMobile) && (
        <div className="bg__video-placeholder">
          <img src="./img/section-project-background.webp" alt="Loading..." />
        </div>
      )}
      <video
        ref={videoRef}
        className={`bg__video-content ${isLoaded ? "loaded" : "loading"}`}
        autoPlay={!isMobile}
        muted
        loop={!isMobile}
        playsInline
        aria-label="Background video of technology"
        style={{ display: isLoaded && !isMobile ? "block" : "none" }}
      >
        <source src="./img/video3.mp4" type="video/mp4" />
        <source src="./img/video.webm" type="video/webm" />
        <p>
          Your browser does not support the video tag. Please upgrade your
          browser to view this content.
        </p>
      </video>
    </div>
  );
}

export default TechsBg;
