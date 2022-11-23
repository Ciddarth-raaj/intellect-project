import { useState } from "react";
import CircularProgress from "../circularProgress/circularProgress";
import LinearSlider from "../linearSlider/linearSlider";

// Props
// size - used to set the width and height of the widget
// max - used to set the max value in linear slider

const Widget1 = ({ size = 200, max = 10, min = 0 }) => {
  const [value, setValue] = useState(10);

  return (
    <div>
      <CircularProgress
        size={size}
        value={value}
        setValue={setValue}
        parentStyle={{ marginBottom: "30px" }}
        percentage={(value / 10) * 100}
      />
      <LinearSlider
        width={size}
        max={max}
        min={min}
        value={value}
        setValue={setValue}
      />
    </div>
  );
};

export default Widget1;
