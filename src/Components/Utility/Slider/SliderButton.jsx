import styles from "./SliderButton.module.css";

function SliderButton({ type, onClick }) {
  const buttonLabel = type === "forward" ? "Next Slide" : "Previous Slide";

  return (
    <button
      className={styles.btn}
      onClick={onClick}
      aria-label={buttonLabel}
      title={buttonLabel}
    >
      {type === "forward" ? (
        <svg
          className="h-8 w-8 text-red-500"
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      ) : (
        <svg
          className="h-8 w-8 text-red-500"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <polyline points="15 6 9 12 15 18" />
        </svg>
      )}
    </button>
  );
}

export default SliderButton;
