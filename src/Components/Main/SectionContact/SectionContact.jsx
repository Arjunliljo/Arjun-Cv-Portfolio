import { useEffect, useMemo, useRef } from "preact/hooks";
import ContactForm from "./Form/ContactForm";
import { useSelector } from "react-redux";
import { setIsContact } from "../../../App/features/contactSlice";
import { useObserver } from "../../../Hooks/useObeserver";
import { useSection } from "../../../Context/SectionContext";

function SectionContact() {
  const contactSection = useRef(null);
  const isContact = useSelector((state) => state.contact.isContact);
  const { isMobile } = useSection();
  const [callback] = useObserver(setIsContact, true, false);

  const threshold = isMobile ? 0 : 0.3;

  const contactObserver = useMemo(() => {
    return new IntersectionObserver(callback, {
      root: null,
      threshold,
    });
  });

  useEffect(() => {
    if (contactSection.current) {
      contactObserver.observe(contactSection.current);
    }

    return () => {
      if (contactSection.current) {
        contactObserver.unobserve(contactSection.current);
      }
    };
  }, [contactObserver]);

  return (
    <section ref={contactSection} className="section-book" id="sectionContact">
      <div
        className="book"
        style={
          isContact ? { transform: "scaleX(1)" } : { transform: "scaleX(0)" }
        }
      >
        <div className="book__form">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default SectionContact;
