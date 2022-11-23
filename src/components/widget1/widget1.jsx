import { useState } from "react";
import CircularProgress from "../circularProgress/circularProgress";
import LinearSlider from "../linearSlider/linearSlider";

// Props
// size - used to set the width and height of the widget

const Widget1 = ({ size = 200 }) => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <CircularProgress
        size={size}
        value={value}
        setValue={setValue}
        parentStyle={{ marginBottom: "30px" }}
        percentage={(value / 10) * 100}
      />
      <LinearSlider width={size} max={10} value={value} setValue={setValue} />
    </div>
  );
};

export default Widget1;
