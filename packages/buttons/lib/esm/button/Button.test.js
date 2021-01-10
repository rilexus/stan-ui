import { render } from "@testing-library/react";
import React from "react";
import { Button } from "./Button";
describe('Button', function () {
    it('should render the word "Button"', function () {
        var getByText = render(React.createElement(Button, null)).getByText;
        expect(getByText('Button')).toBeDefined();
    });
});
//# sourceMappingURL=Button.test.js.map