import { cleanup } from "@testing-library/react";
import * as emotion from "@emotion/core";
import { createSerializer } from "jest-emotion";

afterEach(cleanup);

expect.addSnapshotSerializer(createSerializer(emotion));
