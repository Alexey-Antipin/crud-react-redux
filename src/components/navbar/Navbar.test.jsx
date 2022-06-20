import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  it("Navbar spanshot", () => {
    const { asFragment } = render(<Navbar />);
    expect(asFragment(<Navbar />)).toMatchSnapshot();
  });
});
