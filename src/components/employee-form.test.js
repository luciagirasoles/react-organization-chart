import React from "react";
import { render, fireEvent } from "@testing-library/react";

import EmployeeForm from "./employee-form";

test("EmployeeForm - no title", () => {
  const onSubmit = jest.fn();

  const { getByLabelText, getByRole, asFragment } = render(
    <EmployeeForm onSubmit={onSubmit} />
  );

  fireEvent.change(getByLabelText("Write the employee name"), {
    target: { value: "John Doe" }
  });

  fireEvent.change(getByLabelText("Write the employee title"), {
    target: { value: "Testing Engineer" }
  });

  fireEvent.submit(getByRole(/form/));

  expect(onSubmit).toHaveBeenCalledWith({
    name: "John Doe",
    title: "Testing Engineer"
  });

  expect(asFragment()).toMatchSnapshot();
});

test("EmployeeForm - title", () => {
  const onSubmit = jest.fn();

  const { getByLabelText, getByRole, asFragment } = render(
    <EmployeeForm onSubmit={onSubmit} title="CEO" />
  );

  expect(asFragment()).toMatchSnapshot();

  fireEvent.change(getByLabelText("Write the employee name"), {
    target: { value: "John Doe" }
  });

  fireEvent.submit(getByRole(/form/));

  expect(onSubmit).toHaveBeenCalledWith({
    name: "John Doe",
    title: "CEO"
  });
});
