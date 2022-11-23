import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Widget1 from "../components/widget1/widget1";

test("Linear Slider Counter - 10", () => {
  const { getByTestId } = render(<Widget1 />);

  const linearSlider = getByTestId("linear-slider");
  const valueCounter = getByTestId("counter");

  fireEvent.change(linearSlider, { target: { value: "10" } });
  expect(valueCounter.textContent).toBe("10");
});

test("Linear Slider Counter - Max", () => {
  const { getByTestId } = render(<Widget1 max="90" />);

  const linearSlider = getByTestId("linear-slider");
  const valueCounter = getByTestId("counter");

  fireEvent.change(linearSlider, { target: { value: "100" } });
  expect(valueCounter.textContent).toBe("90");
});

test("Linear Slider Counter - Min", () => {
  const { getByTestId } = render(<Widget1 min="20" />);

  const linearSlider = getByTestId("linear-slider");
  const valueCounter = getByTestId("counter");

  fireEvent.change(linearSlider, { target: { value: "0" } });
  expect(valueCounter.textContent).toBe("20");
});
