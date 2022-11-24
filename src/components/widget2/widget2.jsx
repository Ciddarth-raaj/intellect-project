import React, { useState } from "react";

import styles from "./widget2.module.css";

const bars = [
  "M45.2831 94.376C43.9527 91.0889 46.3718 87.5 49.9179 87.5H54.405C57.8626 87.5 60.2766 90.9255 59.1137 94.1817L54.5157 107.056C54.2064 107.922 53.3862 108.5 52.4666 108.5V108.5C51.5802 108.5 50.7823 107.962 50.4497 107.141L45.2831 94.376Z",
  "M34.118 71.2361C32.4558 67.9116 34.8733 64 38.5902 64L65.3062 64C68.9245 64 71.3448 67.7243 69.8752 71.0307L66.3197 79.0307C65.5172 80.8363 63.7266 82 61.7506 82H42.5902C40.6963 82 38.965 80.93 38.118 79.2361L34.118 71.2361Z",
  "M24.3416 50.6833C22.3469 46.6939 25.2479 42 29.7082 42H74.2918C78.7521 42 81.6531 46.6939 79.6584 50.6833L77.6584 54.6833C76.642 56.716 74.5644 58 72.2918 58H31.7082C29.4356 58 27.358 56.716 26.3416 54.6833L24.3416 50.6833Z",
  "M14.0062 29.5466C12.1412 25.5679 15.0448 21 19.439 21H84.2918C88.7521 21 91.6531 25.6939 89.6584 29.6833L87.6584 33.6833C86.642 35.716 84.5644 37 82.2918 37H21.314C18.9865 37 16.8691 35.654 15.8812 33.5466L14.0062 29.5466Z",
  "M4.34164 8.68328C2.34694 4.69387 5.24791 0 9.7082 0L94.2918 0C98.7521 0 101.653 4.69387 99.6584 8.68328L97.6584 12.6833C96.642 14.716 94.5644 16 92.2918 16H11.7082C9.43557 16 7.35799 14.716 6.34164 12.6833L4.34164 8.68328Z",
];

// Props
// width - width of the widget
// defaultValue - default value of the widget
// showStatus - display text with the status (High, Medium, Low)

const Widget2 = ({ width = "200px", defaultValue = 0, showStatus = true }) => {
  const [value, setValue] = useState(defaultValue);

  const handleValueChange = (index) => {
    setValue(index);
  };

  const statusText = () => {
    if (value > 3) {
      return "High";
    }

    if (value >= 2) {
      return "Medium";
    }

    return "Low";
  };

  return (
    <div className={styles.barWrapper} style={{ width: width }}>
      {showStatus && <p data-testid="status-text">{statusText()}</p>}
      <svg viewBox="0 0 104 109" fill="none" xmlns="http://www.w3.org/2000/svg">
        {bars.map((d, index) => (
          <path
            key={`bar-${index}`}
            d={d}
            fill="white"
            onClick={() => handleValueChange(index)}
            className={index == value ? styles.selected : ""}
            data-testid={`bar-${index}`}
          />
        ))}
      </svg>
    </div>
  );
};

export default Widget2;
