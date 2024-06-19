import { useState, useEffect } from "react";
import styles from "./TextBox.module.css";
import { useRef } from "preact/hooks";

const webDevAnim = {
  animation: "webDevAnim 3s infinite",
};
const cursorAnim = {
  animation: "cursor-anim 1s infinite",
};
let isSwitch = false;
function TextBox() {
  const [isAnim, setIsAnim] = useState(false);
  const [elementWidth, setElementWidth] = useState(0);

  //   const [isSwitch, setIsSwitch] = useState(false);

  const elementRef = useRef(null);
  const resizeObserver = useRef(null);

  let element = useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnim((prevIsAnim) => !prevIsAnim);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Ensure ResizeObserver is supported by the browser
    if (typeof ResizeObserver === "function") {
      // Create a new ResizeObserver instance
      resizeObserver.current = new ResizeObserver((entries) => {
        for (let entry of entries) {
          // Update state with new width
          setElementWidth(entry.contentRect.width);
        }
      });

      // Start observing the element
      if (elementRef.current) {
        resizeObserver.current.observe(elementRef.current);
      }
    }

    // Cleanup observer on component unmount
    return () => {
      if (resizeObserver.current) {
        resizeObserver.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (elementWidth === 0) {
      isSwitch = !isSwitch;
      console.log(isSwitch);
    }
  }, [elementWidth]);

  return (
    <section className="text-box">
      <h1 className="primery-title">
        <span className="primery-title--main">Arjun Cv</span>
        <span className="primery-title--sub">
          <span
            className="primery-title--sub-wrapper"
            ref={elementRef}
            style={isAnim ? webDevAnim : cursorAnim}
          >
            <span className="primery-title--sub-content">
              {isSwitch ? "full stack developer" : "Graphic designer"}
            </span>
          </span>
        </span>
      </h1>
      <a
        style={{ marginTop: "4rem" }}
        href="./files/Arjun-Cv-Resume.pdf"
        className="btn btn-white btn--animated discover"
        download="Arjun-Cv-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
    </section>
  );
}

export default TextBox;
