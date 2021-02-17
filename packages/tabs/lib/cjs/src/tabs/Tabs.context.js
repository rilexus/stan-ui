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
var useTabsContext = function () {
    var context = react_1.useContext(tabContext);
    if (!context || !context.setActiveTabName) {
        console.warn('useTabsContext needs to be inside of the Tabs component');
    }
    return context;
};
exports.useTabsContext = useTabsContext;
//# sourceMappingURL=Tabs.context.js.map