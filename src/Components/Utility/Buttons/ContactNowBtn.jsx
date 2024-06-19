import styles from "./ContactNowBtn.module.css";
function ContactNowBtn({ children }) {
  return <button className={styles.btn}>{children}</button>;
}

export default ContactNowBtn;
