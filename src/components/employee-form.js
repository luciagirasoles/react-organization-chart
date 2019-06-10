/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Button, Card, Input } from "./ui";

function EmployeeForm({ onSubmit, companyName, title }) {
  const [employeeName, setEmployeeName] = React.useState("");
  const [employeeTitle, setEmployeeTitle] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ name: employeeName, title: title || employeeTitle });
    setEmployeeName("");
    setEmployeeTitle("");
  }

  function handleNameChange(event) {
    setEmployeeName(event.target.value);
  }

  function handleTitleChange(event) {
    setEmployeeTitle(event.target.value);
  }

  return (
    <Card css={{ maxWidth: "450px" }}>
      <form onSubmit={handleSubmit}>
        <h1
          css={{
            fontSize: "2rem",
            fontWeight: "normal",
            margin: "0"
          }}
        >
          {companyName}'s {title ? `${title} Name` : "Employee Name"}
        </h1>
        <div
          css={{
            margin: "2rem 0"
          }}
        >
          <Input
            aria-label="Write the employee name"
            placeholder="John Doe"
            type="text"
            name="name"
            required
            autoFocus
            value={employeeName}
            onChange={handleNameChange}
          />
        </div>
        {!title && (
          <div
            css={{
              margin: "2rem 0"
            }}
          >
            <Input
              aria-label="Write the employee title"
              placeholder="Software Engineer"
              type="text"
              name="title"
              value={employeeTitle}
              onChange={handleTitleChange}
            />
          </div>
        )}
        <Button>Create employee</Button>
      </form>
    </Card>
  );
}

export default EmployeeForm;
