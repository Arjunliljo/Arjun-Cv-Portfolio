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
      break;

    case "sass":
      curTech.src = "img/sass.svg";
      curTech.alt = "sass/scss";
      curTech.placeHolder = "Sass";
      curTech.desc = "Sass Expertise: Elevating CSS Styling with Sass";
      curTech.paragraph =
        "Fluent in Sass, proficiently enhancing CSS workflows with variables, mixins, and nesting. Empowering efficient and maintainable styling solutions, elevating web development projects with streamlined code organization and modularity";
      break;

    case "photoshop":
      curTech.src = "img/adobe.webp";
      curTech.alt = "photoshop designing";
      curTech.placeHolder = "Graphic Design";
      curTech.desc = "Graphic design: Adobe Creative Suite";
      curTech.paragraph =
        "My toolbox includes Adobe Photoshop, illustartor ..etc, where I can transform photos and illustrations. I manipulate, edit, and enhance visuals to bring graphic design ideas to fruition";
      break;

    case "gpt":
      curTech.src = "img/chat-gpt.png";
      curTech.alt = "chat GPT";
      curTech.placeHolder = "Chat GPT";
      curTech.desc = "Simplifying Communication with Technology";
      curTech.paragraph =
        "Experienced in AI Conversations: I excel in using ChatGPT for seamless communication. With this skill, I make interacting with technology smoother and more efficient, enhancing the overall conversation experience. Let me show you how AI can simplify communication and improve engagement";
      break;

    case "js":
      curTech.src = "img/javaScipt.svg";
      curTech.alt = "javaScript";
      curTech.placeHolder = "JavaScipt";
      curTech.desc = "My Journey with a Strong JavaScript Foundation";
      curTech.paragraph =
        "Proficient in JavaScript: Completed courses by Jonas Schmedtmann on Udemy and Entri. Well-versed in JavaScript fundamentals and  advanced concepts. Always ready to apply skills in web development, creating dynamic and interactive websites. Let's build something amazing with JavaScript";
      break;

    case "java":
      curTech.src = "img/java.jpg";
      curTech.alt = "javaScript";
      curTech.placeHolder = "Java";
      curTech.desc = "Programing with Java";
      curTech.paragraph =
        "My introduction to programming began with Java, learned through YouTube tutorials. As my first programming language, Java ignited my passion for coding and laid a solid foundation for my journey into DSA";
      break;

    default:
      throw new Error("Undefined Tech");
  }

  return curTech;
}
