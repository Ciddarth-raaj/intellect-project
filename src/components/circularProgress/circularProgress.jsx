import React from "react";

import styles from "./circularProgress.module.css";

const CircularProgress = ({
  size = 200,
  parentStyle,
  value = 0,
  percentage = 0,
  strokeWidth = 3,
}) => {
  // Size of the enclosing square
  const sqSize = size;
  // SVG centers the stroke width on the radius, subtract out so circle fits in square
  const radius = size / 2;
  // Enclose cicle in a circumscribing square
  const viewBox = `0 0 ${sqSize} ${sqSize}`;

  const progressRadius = radius - size / 10;
  // Arc length at 100% coverage is the circle circumference
  const dashArray = progressRadius * Math.PI * 2;
  // Scale 100% coverage overlay with the actual percent
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  const startX = size / 2;
  const startY = size / 2;

  return (
    <div style={parentStyle}>
      <svg width={size} height={size} viewBox={viewBox}>
        <circle
          cx={startX}
          cy={startY}
          r={radius}
          fill="none"
          stroke="white"
          stroke-opacity="0.38"
          stroke-dasharray="5 12"
        />
        <circle cx={startX} cy={startY} r={progressRadius} fill="#446A79" />

        <circle
          fill="none"
          cx={startX}
          cy={startY}
          r={progressRadius}
          stroke="white"
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
            transition: "all 0.7s",
          }}
        />

        <circle
          cx={startX}
          cy={startY}
          r={progressRadius - size / 10}
          fill="#77DBE6"
        />

        <text
          className={styles.percentageText}
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
          fill="white"
        >
          {value}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgress;
