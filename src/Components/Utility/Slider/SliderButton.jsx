import styles from "./SliderButton.module.css";
function SliderButton({ type, onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {type === "forward" ? (
        <svg
          class="h-8 w-8 text-red-500"
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      ) : (
        <svg
          class="h-8 w-8 text-red-500"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <polyline points="15 6 9 12 15 18" />
        </svg>
      )}
    </button>
  );
}

export default SliderButton;
