import { render } from "@testing-library/react";
import React from "react";
import { Button } from "./Button";
describe("Button", () => {
    it('should render the word "Button"', function () {
        const { getByText } = render(React.createElement(Button, null));
        expect(getByText("Button")).toBeDefined();
    });
});
//# sourceMappingURL=Button.test.js.map