import React from "react";
import { render } from "@testing-library/react";

import { Button, Card, Input, Modal, Select } from "./ui";

test("Button", () => {
  expect(
    render(<Button>This is content</Button>).asFragment()
  ).toMatchSnapshot();
});

test("Card", () => {
  expect(render(<Card>This is content</Card>).asFragment()).toMatchSnapshot();
});

test("Input", () => {
  expect(render(<Input />).asFragment()).toMatchSnapshot();
});

test("Modal", () => {
  expect(render(<Modal />).asFragment()).toMatchSnapshot();
});

test("Select", () => {
  expect(
    render(
      <Select>
        <option value="testing">Testing</option>
      </Select>
    ).asFragment()
  ).toMatchSnapshot();
});
