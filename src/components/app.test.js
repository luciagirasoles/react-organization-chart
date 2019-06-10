import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";

import App from "./app";

test("App", async () => {
  global.Date.now = jest.fn(() =>
    new Date("2019-06-10T03:25:00.00Z").getTime()
  );
  const { getByLabelText, asFragment } = render(<App />);

  expect(asFragment()).toMatchSnapshot();

  fireEvent.change(getByLabelText("Enter your company name"), {
    target: { value: "Testing Inc." }
  });
  fireEvent.submit(getByLabelText("Enter your company name"));

  expect(asFragment()).toMatchSnapshot();

  fireEvent.change(getByLabelText("Write the employee name"), {
    target: { value: "John Doe" }
  });

  fireEvent.submit(getByLabelText("Write the employee name"));

  expect(asFragment()).toMatchSnapshot();

  global.Date.now = jest.fn(() =>
    new Date("2019-06-10T03:26:00.000Z").getTime()
  );

  fireEvent.change(getByLabelText("Select a filter"), {
    target: { value: "Software Engineer" }
  });

  expect(asFragment()).toMatchSnapshot();

  fireEvent.click(getByLabelText("Add new employee under John Doe"));

  expect(asFragment()).toMatchSnapshot();

  fireEvent.change(
    await waitForElement(() => getByLabelText("Write the employee name")),
    { target: { value: "John Wick" } }
  );

  fireEvent.change(getByLabelText("Write the employee title"), {
    target: { value: "Software Engineer" }
  });

  fireEvent.submit(getByLabelText("Write the employee title"));

  expect(asFragment()).toMatchSnapshot();
});
