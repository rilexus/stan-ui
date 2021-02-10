"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tab = void 0;
var Tabs_context_1 = require("../tabs/Tabs.context");
var Tab = function (_a) {
    var children = _a.children, name = _a.name;
    var tabContext = Tabs_context_1.useTabsContext();
    return tabContext.activeTabName === name ? children : null;
};
exports.Tab = Tab;
//# sourceMappingURL=Tab.js.map