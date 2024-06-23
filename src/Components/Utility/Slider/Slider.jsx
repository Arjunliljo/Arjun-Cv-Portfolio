import React from "react";
import styles from "./Slider.module.css";
import { useState } from "preact/hooks";
import SliderButton from "./SliderButton";

function Slider({
  children,
  items = 3,
  gap = "30px",
  childWidth = "280px",
  sliderStyle,
  isMobile,
  totalItem,
}) {
  const numericGap = parseInt(gap);
  const numericChildWidth = parseInt(childWidth);
  // Calculate the total width of the container
  const itemWidth = numericChildWidth + numericGap;
  const shoWidth = numericChildWidth * items + numericGap * (items - 1);

  const totalItemsWidth = (React.Children.count(children) - items) * itemWidth;

  const [translate, setTranslate] = useState(0);

  const style = {
    gap: gap,
  };

  const handleFront = () => {
    if (translate >= totalItemsWidth) {
      return;
    }
    setTranslate((trans) => trans + itemWidth);
  };
  const handleBack = () => {
    if (translate === 0) {
      return;
    }

    setTranslate((trans) => trans - itemWidth);
  };

  return (
    <>
      <div className={styles.container}>
        <SliderButton onClick={handleBack} />

        <div
          className={styles.slider}
          style={{ width: shoWidth, ...sliderStyle }}
        >
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
        <SliderButton onClick={handleFront} type="forward" />
      </div>
    </>
  );
}

export default Slider;
