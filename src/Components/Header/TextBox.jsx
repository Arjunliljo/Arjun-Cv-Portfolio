function TextBox() {
  return (
    <section className="text-box">
      <h1 className="primery-title">
        <span className="primery-title--main">Arjun Cv</span>
        <span className="primery-title--sub">
          <span>full stack Developer</span>
        </span>
      </h1>
      <a
        href="./files/Arjun-Cv-Resume.pdf"
        className="btn btn-white btn--animated discover"
        download="Arjun-Cv-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
    </section>
  );
}

export default TextBox;
