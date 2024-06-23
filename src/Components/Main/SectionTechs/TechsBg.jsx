function TechsBg() {
  return (
    <div className="bg__video">
      <video className="bg__video-content" autoPlay="" muted="" loop="">
        <source src="./img/video3.mp4" type="video/mp4" />
        <source src="./img/video.webm" type="video/webm" />
        Your brouser not Supported the Video!
      </video>
    </div>
  );
}

export default TechsBg;
