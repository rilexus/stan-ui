import { createContext, useContext } from "react";
var tabContext = createContext({
    activeTabName: null,
    // @ts-ignore
    setActiveTabName: function (name) { },
});
var TabContextProvider = tabContext.Provider;
// @ts-ignore
TabContextProvider.displayName = 'TabContextProvider';
var useTabsContext = function () { return useContext(tabContext); };
export { useTabsContext, TabContextProvider };
//# sourceMappingURL=Tabs.context.js.map