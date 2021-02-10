"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabButton = void 0;
var react_1 = require("react");
var Tabs_context_1 = require("../tabs/Tabs.context");
var TabButton = function (_a) {
    var children = _a.children;
    var tabContext = Tabs_context_1.useTabsContext();
    var setActiveTabName = react_1.useCallback(function (name) {
        tabContext.setActiveTabName(name);
    }, [tabContext.setActiveTabName]);
    return children(setActiveTabName);
};
exports.TabButton = TabButton;
//# sourceMappingURL=TabButton.js.map