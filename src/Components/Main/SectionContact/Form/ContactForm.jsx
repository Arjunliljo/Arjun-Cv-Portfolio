import { useState } from "preact/hooks";
import RadioButtons from "./RadioButtons";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isHire, setIsHire] = useState(false);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, isHire, text };
  };

  return (
    <form action="" className="form" aria-labelledby="contact-heading">
      <h2
        className="heading-secondary"
        id="contact-heading"
        style={{ marginBottom: "3rem" }}
      >
        Contact
      </h2>

      <div className="form__group">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form__input"
          id="name"
          name="name"
          required
          placeholder="Full name"
          aria-required="true"
        />
        <label htmlFor="name" className="form__label">
          Full name
        </label>
      </div>

      <div className="form__group">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form__input"
          id="email"
          name="email"
          required
          placeholder="Email"
          aria-required="true"
        />
        <label htmlFor="email" className="form__label">
          Email address
        </label>
      </div>

      <div className="form__group">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          name="message"
          id="message"
          className="form__textArea"
          placeholder="Write Message"
          aria-required="true"
        ></textarea>
      </div>

      <div className="from__group">
        <RadioButtons onHire={setIsHire} />
      </div>

      <div className="form__group share-thought-btn" id="form_button">
        <button
          type="submit"
          className="form-btn btn btn-blue"
          onClick={handleSubmit}
        >
          Send →
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
