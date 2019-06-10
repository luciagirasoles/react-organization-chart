/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Button, Card, Input } from "./ui";

function CompanyNameForm({ onSubmit }) {
  const [content, setContent] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(content);
    setContent("");
  }

  function handleChange(event) {
    setContent(event.target.value);
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
          Company Name
        </h1>
        <div
          css={{
            margin: "2rem 0"
          }}
        >
          <Input
            aria-label="Enter your company name"
            type="text"
            value={content}
            onChange={handleChange}
            placeholder="ACME Inc."
            autoFocus
          />
        </div>
        <Button>Set company name</Button>
      </form>
    </Card>
  );
}

export default CompanyNameForm;
