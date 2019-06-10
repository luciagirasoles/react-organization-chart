import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";

import Employee from "./employee";

test("Employee", async () => {
  const onNewSubordinate = jest.fn();

  const id = new Date("2019-06-10T03:25:39.064Z").getTime();
  const employeeID = id + 1;
  const employees = {
    [id]: {
      id,
      name: "John Doe",
      title: "CEO",
      subordinates: [employeeID]
    },
    [employeeID]: {
      id: employeeID,
      name: "Jane Doe",
      title: "CTO",
      subordinates: []
    }
  };

  const { getByLabelText, asFragment } = render(
    <Employee
      {...employees[id]}
      level={0}
      employees={employees}
      companyName="ACME Inc."
      onNewSubordinate={onNewSubordinate}
      highlightedTitle="CTO"
    />
  );

  expect(asFragment()).toMatchSnapshot();

  const button = getByLabelText("Add new employee under John Doe");

  fireEvent.click(button);

  expect(asFragment()).toMatchSnapshot();

  const employeeInput = await waitForElement(() =>
    getByLabelText("Write the employee name")
  );
  fireEvent.change(employeeInput, { target: { value: "John Wick" } });

  const titleInput = getByLabelText("Write the employee title");
  fireEvent.change(titleInput, { target: { value: "COO" } });

  fireEvent.submit(titleInput);

  expect(onNewSubordinate).toHaveBeenCalledWith({
    id,
    title: "COO",
    name: "John Wick"
  });

  fireEvent.click(button);

  fireEvent.keyDown(document, {
    key: "Escape",
    code: 27,
    charCode: 27
  });

  expect(asFragment()).toMatchSnapshot();
});
