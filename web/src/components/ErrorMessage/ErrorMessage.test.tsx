import "@testing-library/jest-dom/extend-expect";
import { unmountComponentAtNode } from "react-dom";
import { render, screen } from "@testing-library/react";

import ErrorMessage from "./index";

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

test("render ErrorMessage component", () => {
  const error = "An exception has happened!";
  const className = "error-class";
  render(<ErrorMessage message={error} className={className} />);

  const errorEl = screen.getByTestId("error");
  expect(errorEl).toBeInTheDocument();
  expect(errorEl).toHaveTextContent(new RegExp(error, "i"));
  expect(errorEl).toHaveClass(className);
});

test("shouldn't render ErrorMessage component", () => {
  const error = null;
  render(<ErrorMessage message={error} />);

  const errorEl = screen.queryByTestId("error");
  expect(errorEl).toBeNull();
});
