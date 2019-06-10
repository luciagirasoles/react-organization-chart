import React from "react";
import { render, fireEvent } from "@testing-library/react";

import CompanyNameForm from "./company-name-form";

test("CompanyName", () => {
  const onSubmit = jest.fn();

  const { getByLabelText, asFragment } = render(
    <CompanyNameForm onSubmit={onSubmit} />
  );

  const input = getByLabelText("Enter your company name");

  fireEvent.change(input, { target: { value: "Testing Inc." } });
  fireEvent.submit(input);

  expect(onSubmit).toHaveBeenCalledWith("Testing Inc.");
  expect(asFragment()).toMatchSnapshot();
});
