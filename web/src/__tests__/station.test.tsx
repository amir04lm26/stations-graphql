import "cross-fetch/polyfill";
import "@testing-library/jest-dom/extend-expect";
import { unmountComponentAtNode } from "react-dom";
import { render, screen } from "@testing-library/react";

import Station from "pages/station/[sid]";
import { stationsMockData } from "__mocks__/stations";

let container: HTMLElement | undefined = undefined;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  if (container) {
    unmountComponentAtNode(container);
    container.remove();
    container = undefined;
  }
});

test("renders Station page", () => {
  render(<Station station={null} error={null} />, {
    container,
  });
  const title = screen.getByTestId("title");
  expect(title).toBeInTheDocument();
});

test("renders Station page with data", () => {
  const station = stationsMockData[0];
  render(<Station station={station} error={null} />, {
    container,
  });

  screen.getByTestId("station-title");
  screen.getByText(/Station 1/);

  const station5 = screen.queryByText(/Station 2/);
  expect(station5).toBeNull();
});

test("data fetching error in Station page", () => {
  const error = "An exception has happened!";

  render(<Station station={null} error={error} />, {
    container,
  });

  const station = screen.queryByText(/Station 1/);
  expect(station).toBeNull();

  const errorEl = screen.getByTestId("error");
  expect(errorEl).toBeInTheDocument();
  expect(errorEl).toHaveTextContent(new RegExp(error, "i"));
});
