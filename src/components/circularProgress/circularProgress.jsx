import styles from "./circularProgress.module.css";

const CircularProgress = ({ size = "200px", style }) => {
  return (
    <div
      className={styles.mainCircle}
      style={{ width: size, height: size, ...style }}
    >
      {/* Circle with dots - outer most */}
      <div className={styles.dottedCircle}>
        {/* Circle with progress - white line */}
        <div>
          {/* Filled inner circle */}
          <div className={styles.filledInnerCircle}>
            <div className={styles.centerCircle}>
              <p>10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
