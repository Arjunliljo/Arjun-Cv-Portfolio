function FeatureBox({ children, type, style }) {
  let title, content;

  switch (type) {
    case "mongo":
      title = "Mongo DB";
      content =
        "I am currently in the process of familiarizing myself with MongoDB. Stay tuned for updates on my progress with MongoDB as I continue to enhance my skills in database management and backend development.";
      break;

    case "express":
      title = "Express Js";
      content =
        "Currently exploring Express.js for backend web development.Embracing its simplicity and flexibility to build robust APIs and web applications. Stay tuned for updates on my Express.js adventures";
      break;

    case "react":
      title = "React";
      content =
        " Delving into React for frontend development. Harnessing its power to create dynamic, interactive user interfaces. Excited to showcase my React projects and progress. Stay tuned for more";
      break;

    case "node":
      title = "NODE JS";
      content =
        "Exploring Node.js for backend development, unlocking its potential to create efficient, scalable applications. Eager to showcase my Node.js projects and progress. Stay tuned for updates";
      break;
  }

  return (
    <div className="section-features__col">
      <div className="feature-box" style={style}>
        {children}
        <h3 className="header-thertiary">{title}</h3>
        <p className="feature-box__text">{content}</p>
      </div>
    </div>
  );
}

export default FeatureBox;
