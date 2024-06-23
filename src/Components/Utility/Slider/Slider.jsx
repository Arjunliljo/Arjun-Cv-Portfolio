import React from "react";
import styles from "./Slider.module.css";
import { useEffect, useState } from "preact/hooks";
import SliderButton from "./SliderButton";

function Slider({
  children,
  items = 3,
  gap = "30px",
  childWidth = "280px",
  sliderStyle,
  auto = false,
}) {
  const [isHover, setIsHover] = useState(false);

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
  console.log(translate, totalItemsWidth);

  useEffect(() => {
    if (!auto || isHover) return;

    let autoInterval, timeout;

    if (translate >= totalItemsWidth) {
      timeout = setTimeout(() => {
        setTranslate(0);
      }, 2000);
    } else {
      autoInterval = setInterval(() => {
        setTranslate((trans) => trans + itemWidth);
      }, 2000);
    }

    return () => {
      clearInterval(autoInterval);
      clearTimeout(timeout);
    };
  }, [auto, isHover, translate, totalItemsWidth, itemWidth]);

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
      <div className={styles.container} style={sliderStyle}>
        {auto ? "" : <SliderButton onClick={handleBack} />}

        <div className={styles.slider} style={{ width: shoWidth }}>
          <div
            className={styles.row}
            style={{ gap, transform: `translateX(-${translate}px)` }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
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

        {auto ? "" : <SliderButton onClick={handleFront} type="forward" />}
      </div>
    </>
  );
}

export default Slider;
