import styles from './App.module.css';

import Widget1 from './components/widget1/widget1';
import Widget2 from './components/widget2/widget2';

function App() {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.widgetContainer}>
        <Widget1 />
      </div>

      <div className={styles.widgetContainer}>
        <Widget2 width={200} defaultValue={4} showStatus={true} />
      </div>
    </div>
  );
}

export default App;
