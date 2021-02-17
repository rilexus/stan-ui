"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("@testing-library/react");
var react_2 = tslib_1.__importDefault(require("react"));
var Button_1 = require("./Button");
describe("Button", function () {
    it('should render the word "Button"', function () {
        var getByText = react_1.render(react_2.default.createElement(Button_1.Button, null)).getByText;
        expect(getByText("Button")).toBeDefined();
    });
});
//# sourceMappingURL=Button.test.js.map