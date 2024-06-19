function SectionAbout() {
  return (
    <section className="section-about" id="sectionAbout">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">About Me</h2>
      </div>
      {/* <div className="u-center-text u-margin-bottom-8"></div> */}
      <div className="section-about__grid">
        <div className="section-about__grid-c">
          <h3 className="header-thertiary u-margin-bottom-small">
            Building the Future
          </h3>
          <p className="paragraph">
            Having transitioned from the world of graphic design, I'm now a
            full-stack developer fueled by a passion for building dynamic
            experiences. With a year of coding under my belt and a love for
            tackling LeetCode challenges, I'm eager to leverage my creativity
            and technical skills to bring innovative solutions to life.
          </p>
          <h3 className="header-thertiary u-margin-bottom-small">
            From Design to Development
          </h3>
          <p className="paragraph">
            My journey in tech began with crafting visuals, but my passion
            evolved to building the interactive experiences behind them. Now, as
            a MERN Stack developer, I bridge design and development,
            transforming ideas into dynamic solutions.
          </p>
          <a
            href="https://www.linkedin.com/in/arjun-cv/"
            className="btn-learn-more u-margin-bottom-big"
          >
            Know more →
          </a>
        </div>

        <div className="section-about__grid-c">
          <div className="composition">
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
        </div>
      </div>
    </section>
  );
}

export default SectionAbout;
