import './App.css';

import LinearSlider from './components/linearSlider/linearSlider';
import CircularProgress from './components/circularProgress/circularProgress';

function App() {
  return (
    <div>
      <CircularProgress parentStyle={{ marginBottom: "30px" }} />
      <LinearSlider max={10} />
    </div>
  );
}

export default App;
