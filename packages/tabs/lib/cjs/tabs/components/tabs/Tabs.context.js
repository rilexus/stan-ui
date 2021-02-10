"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabContextProvider = exports.useTabsContext = void 0;
var react_1 = require("react");
var tabContext = react_1.createContext({
    activeTabName: null,
    // @ts-ignore
    setActiveTabName: function (name) { },
});
var TabContextProvider = tabContext.Provider;
exports.TabContextProvider = TabContextProvider;
// @ts-ignore
TabContextProvider.displayName = 'TabContextProvider';
var useTabsContext = function () { return react_1.useContext(tabContext); };
exports.useTabsContext = useTabsContext;
//# sourceMappingURL=Tabs.context.js.map