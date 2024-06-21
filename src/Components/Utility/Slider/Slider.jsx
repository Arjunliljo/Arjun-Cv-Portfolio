import React from "react";
import styles from "./Slider.module.css";
import { useState } from "preact/hooks";

function Slider({
  children,
  items = 3,
  gap = "30px",
  childWidth = "300px",
  buttonBack,
  buttonFront,
}) {
  const numericGap = parseInt(gap);
  const numericChildWidth = parseInt(childWidth);
  // Calculate the total width of the container
  const totalWidth =
    items * numericChildWidth + (items - 1) * numericGap + "px";
  const totalItemsWidth =
    React.Children.count(children) * numericChildWidth +
    (React.Children.count(children) - 1) * numericGap;

  const [translate, setTranslate] = useState(0);

  const style = {
    gap: gap,
  };

  const handleFront = () => {
    if (translate >= (numericGap + numericChildWidth) * items) {
      return;
    }
    setTranslate((trans) => trans + (numericGap + numericChildWidth));
  };
  const handleBack = () => {
    if (translate === 0) {
      return;
    }

    setTranslate((trans) => trans - (numericGap + numericChildWidth));
  };

  return (
    <>
      <div className={styles.container}>
        <button onClick={handleBack} className={styles.btn}>
          {"<-"}
        </button>
        <div className={styles.slider} style={{ width: totalWidth }}>
          <div
            className={styles.row}
            style={{ gap, transform: `translateX(-${translate}px)` }}
          >
            {React.Children.map(children, (child) =>
              React.cloneElement(child, {
                style: {
                  ...child.props.style,
                  width: childWidth,
                },
              })
            )}
          </div>
        </div>
        <button onClick={handleFront} className={styles.btn}>
          {"->"}
        </button>
      </div>
    </>
  );
}

export default Slider;
