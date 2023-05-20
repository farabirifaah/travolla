import React from "react";
import { render, cleanup } from "@testing-library/react";
import Button from "./index";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

test("should not allowed click button if isDisabled is pressed", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("should render loading / spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/Loading/i)).toBeInTheDocument();

  expect(container.querySelector("span")).toBeInTheDocument();
});

test("should render <a> tag", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("should render <link> Component", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});
