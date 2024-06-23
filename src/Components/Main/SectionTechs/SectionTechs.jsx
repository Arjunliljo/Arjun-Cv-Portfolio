import Headings from "../../Utility/Headings";
import TechContent from "./TechContent/TechContent";
import TechsBg from "./TechsBg";

function SectionTechs() {
  return (
    <section className="section-stories" id="sectionTechs">
      <TechsBg />

      <Headings>Familier technologies</Headings>

      <div className="tech__box">
        <TechContent tech="git" />
        <TechContent tech="sass" />

        <div className="techs">
          <div className="story">
            <figure className="story__shape">
              <img
                src="img/adobe.webp"
                alt="Photo of photoshop"
                className="story__image"
                style={{ transform: "translateX(1px)" }}
              />
              <figcaption className="story__caption">Graphic Design</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="header-thertiary u-margin-bottom-small respond">
                Graphic design: Adobe Creative Suite
              </h3>
              <p>
                My toolbox includes Adobe Photoshop, illustartor ..etc, where I
                can transform photos and illustrations. I manipulate, edit, and
                enhance visuals to bring graphic design ideas to fruition
              </p>
            </div>
          </div>
        </div>
        <div className="techs">
          <div className="story">
            <figure className="story__shape">
              <img
                src="img/chat-gpt.png"
                alt="Photo of Chat GPT"
                className="story__image"
              />
              <figcaption className="story__caption">Chat GPT</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="header-thertiary u-margin-bottom-small respond">
                Simplifying Communication with Technology
              </h3>
              <p>
                Experienced in AI Conversations: I excel in using ChatGPT for
                seamless communication. With this skill, I make interacting with
                technology smoother and more efficient, enhancing the overall
                conversation experience. Let me show you how AI can simplify
                communication and improve engagement
              </p>
            </div>
          </div>
        </div>
        <div className="techs">
          <div className="story">
            <figure className="story__shape">
              <img
                src="img/javaScipt.svg"
                alt="Photo of javascript"
                className="story__image"
                style={{ transform: "translateX(1px)" }}
              />
              <figcaption className="story__caption">JavaScipt</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="header-thertiary u-margin-bottom-small respond">
                My Journey with a Strong JavaScript Foundation
              </h3>
              <p>
                Proficient in JavaScript: Completed courses by Jonas Schmedtmann
                on Udemy and Entri. Well-versed in JavaScript fundamentals and
                advanced concepts. Always ready to apply skills in web
                development, creating dynamic and interactive websites. Let's
                build something amazing with JavaScript
              </p>
            </div>
          </div>
        </div>
        <div className="techs">
          <div className="story">
            <figure className="story__shape">
              <img
                src="img/java.jpg"
                alt="Photo of a person"
                className="story__image"
                style={{ transform: "scale(1.2)" }}
              />
              <figcaption className="story__caption">Java</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="header-thertiary u-margin-bottom-small respond">
                Programing with Java
              </h3>
              <p>
                My introduction to programming began with Java, learned through
                YouTube tutorials. As my first programming language, Java
                ignited my passion for coding and laid a solid foundation for my
                journey into DSA
              </p>
            </div>
          </div>
        </div>
        {/* here more techs */}
      </div>
    </section>
  );
}

export default SectionTechs;
