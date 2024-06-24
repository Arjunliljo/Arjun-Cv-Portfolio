import { useSection } from "../../../Context/SectionContext";

function TechsBg() {
  const { isMobile } = useSection();
  return (
    <div className="bg__video" title="Background video of technology">
      <video
        className="bg__video-content"
        autoPlay={!isMobile}
        muted
        loop={!isMobile}
        playsInline
        aria-label="Background video of technology"
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
