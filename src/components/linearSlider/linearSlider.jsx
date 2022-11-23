import React, { useState } from "react";

import styles from "./linearSlider.module.css";

const LinearSlider = ({ min = 0, max = 100 }) => {
  const [value, setValue] = useState(0); // used to store the value of the linear slider

  return (
    <input
      type="range"
      className={styles.linearscale}
      min={min}
      max={max}
      onChange={(e) => setValue(e.target.value)}
      style={{ backgroundSize: `${(value * 100) / max}% 100%` }} // backgroundSize is used to set the unselected part
      value={value}
    />
  );
};

export default LinearSlider;