import React, { useState } from "react";

import styles from "./linearSlider.module.css";

// Props
// min - min value of the slider
// max - max value of the slider
// value - value of the slider
// setValue - state function used to modify the value
// width - width of the scale

const LinearSlider = ({
  min = 0,
  max = 100,
  value,
  setValue,
  width = "200px",
}) => {
  return (
    <input
      type="range"
      className={styles.linearscale}
      min={min}
      max={max}
      onChange={(e) => setValue(e.target.value)}
      style={{ backgroundSize: `${(value * 100) / max}% 100%`, width: width }} // backgroundSize is used to set the unselected part
      value={value}
    />
  );
};

export default LinearSlider;
