import { useSection } from "../../../Context/SectionContext";
import styles from "./ContactNowBtn.module.css";
function ContactNowBtn({ children }) {
  const { contactEl } = useSection();
  const handleClick = () => {
    contactEl.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button onClick={handleClick} className={styles.btn}>
      {children}
    </button>
  );
}

export default ContactNowBtn;
