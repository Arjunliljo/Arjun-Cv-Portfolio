import styles from "./ContactPopup.module.css";
function ContactPopup({ style, children, onClick }) {
  return (
    <div className="popup" style={style} onClick={onClick}>
      <div className={styles.box}>
        {children ? (
          <>
            Something went wrong, try again or contact:{" "}
            <a
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=arjun7180@gmail.com&su=Subject&body=Message"
              target="_blank"
              style={{ color: "darkblue", textDecoration: "underline" }}
            >
              arjun7180@gmail.com
            </a>
          </>
        ) : (
          "✅ Thank you for reaching out."
        )}
        {/* <button className={styles.btn}>OK</button> */}
      </div>
    </div>
  );
}

export default ContactPopup;
