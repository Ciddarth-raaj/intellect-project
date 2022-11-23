import styles from './App.module.css';

import LinearSlider from './components/linearSlider/linearSlider';
import CircularProgress from './components/circularProgress/circularProgress';
import Widget1 from './components/widget1/widget1';

function App() {
  return (
    <div style={{ display: "flex" }}>
      <div className={styles.widgetContainer}>
        <Widget1 />
      </div>
    </div>
  );
}

export default App;
