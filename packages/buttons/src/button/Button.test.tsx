import { render } from "@testing-library/react";
import React from "react";
import { Button } from "./Button";

describe("Button", () => {
  it('should render the word "Button"', function () {
    const { getByText } = render(<Button />);
    expect(getByText("Button")).toBeDefined();
  });
});
