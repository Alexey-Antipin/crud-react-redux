import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { App } from "./App";

describe("App", () => {
  it("App snapshot", () => {
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
  });
});
