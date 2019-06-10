import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Filter from "./filter";

test("Filter", () => {
  const onChange = jest.fn();
  const { getByLabelText, asFragment } = render(
    <Filter titles={["CEO", "Testing Engineer"]} value="" onChange={onChange} />
  );

  expect(asFragment()).toMatchSnapshot();

  const select = getByLabelText("Select a filter");

  fireEvent.change(select, { target: { value: "CEO" } });

  expect(onChange).toHaveBeenCalledWith("CEO");
});
