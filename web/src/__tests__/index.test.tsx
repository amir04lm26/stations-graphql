import "cross-fetch/polyfill";
import "@testing-library/jest-dom/extend-expect";
import { unmountComponentAtNode } from "react-dom";
import { render, screen } from "@testing-library/react";

import Home from "pages";
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

test("renders Home page", () => {
  render(<Home stations={null} error={null} />, {
    container,
  });
  const title = screen.getByTestId("title");
  expect(title).toBeInTheDocument();
});

test("renders Home page with data", () => {
  render(<Home stations={stationsMockData} error={null} />, {
    container,
  });

  screen.getByText(/Station 1/);
  screen.getByText(/Station 2/);
  screen.getByText(/Station 3/);

  const station5 = screen.queryByText(/Station 5/);
  expect(station5).toBeNull();
});

test("data fetching error in Home page", () => {
  const error = "An exception has happened!";

  render(<Home stations={null} error={error} />, {
    container,
  });

  const station = screen.queryByText(/Station 1/);
  expect(station).toBeNull();

  const errorEl = screen.getByTestId("error");
  expect(errorEl).toBeInTheDocument();
  expect(errorEl).toHaveTextContent(new RegExp(error, "i"));
});
