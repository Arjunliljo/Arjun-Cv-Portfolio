export default function findTech(tech) {
  const curTech = {
    src: "",
    alt: "familiar tech image",
    placeHolder: "Tech",
    desc: "Tech Desciption",
  };

  switch (tech) {
    case "git":
      curTech.src = "img/git-j.jpg";
      curTech.alt = "git";
      curTech.placeHolder = "Git";
      curTech.desc = "Exciting Coding Journey with Git";
      curTech.paragraph =
        "Experienced in Git, proficient in managing repositories, resolving conflicts, and facilitating seamless collaboration. Committed to leveraging Git's capabilities for effective project management andversion control";

    case "sass":
      curTech.src = "img/sass.svg";
      curTech.alt = "sass/scss";
      curTech.placeHolder = "Sass";
      curTech.desc = "Sass Expertise: Elevating CSS Styling with Sass";
      curTech.paragraph =
        "Fluent in Sass, proficiently enhancing CSS workflows with variables, mixins, and nesting. Empowering efficient and maintainable styling solutions, elevating web development projects with streamlined code organization and modularity";
  }

  return curTech;
}
