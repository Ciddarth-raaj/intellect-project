import { useState } from "react";
import CircularProgress from "../circularProgress/circularProgress";
import LinearSlider from "../linearSlider/linearSlider";

const Widget1 = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <CircularProgress
        value={value}
        setValue={setValue}
        parentStyle={{ marginBottom: "30px" }}
        percentage={(value / 10) * 100}
      />
      <LinearSlider max={10} value={value} setValue={setValue} />
    </div>
  );
};

export default Widget1;
