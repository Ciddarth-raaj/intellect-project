import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Widget2 from "../components/widget2/widget2";

test("Widget 2 - High", () => {
  const { getByTestId } = render(<Widget2 />);

  const highestBar = getByTestId("bar-4");
  const statusText = getByTestId("status-text");

  fireEvent.click(highestBar);
  expect(statusText.textContent).toBe("High");
});

test("Widget 2 - Medium", () => {
  const { getByTestId } = render(<Widget2 />);

  const mediumBar = getByTestId("bar-3");
  const statusText = getByTestId("status-text");

  fireEvent.click(mediumBar);
  expect(statusText.textContent).toBe("Medium");
});

test("Widget 2 - Low", () => {
  const { getByTestId } = render(<Widget2 />);

  const lowBar = getByTestId("bar-1");
  const statusText = getByTestId("status-text");

  fireEvent.click(lowBar);
  expect(statusText.textContent).toBe("Low");
});

test("Widget 2 - Default", () => {
  const { getByTestId } = render(<Widget2 defaultValue={3} />);

  const statusText = getByTestId("status-text");

  expect(statusText.textContent).toBe("Medium");
});
