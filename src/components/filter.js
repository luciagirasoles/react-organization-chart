/** @jsx jsx */
import { jsx } from "@emotion/core";

import { Card, Select } from "./ui";

function Filter({ titles, onChange, value }) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <Card
      css={{
        padding: ".5rem",
        marginBottom: "1rem",
        position: "absolute",
        display: "inline-block",
        width: "auto",
        top: "1rem",
        right: "1rem",
        "@media (max-width: 460px)": {
          position: "static",
          width: "100%"
        }
      }}
    >
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="filter"
          css={{
            "@media (max-width: 460px)": {
              display: "block",
              margin: "1rem 0"
            }
          }}
        >
          Highlight employees with title:{" "}
        </label>
        <Select
          styles={{
            container: {
              width: "300px",
              "@media (max-width: 460px)": {
                width: "100%"
              }
            }
          }}
          id="filter"
          name="filter"
          aria-label="Select a filter"
          onChange={handleChange}
          value={value}
        >
          <option value="">-- Select an title --</option>
          {titles.map(title => (
            <option value={title} key={title}>
              {title}
            </option>
          ))}
        </Select>
      </form>
    </Card>
  );
}

export default Filter;
