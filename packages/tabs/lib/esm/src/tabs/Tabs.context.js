import { createContext, useContext } from "react";
var tabContext = createContext({
    activeTabName: null,
    // @ts-ignore
    setActiveTabName: function (name) { },
});
var TabContextProvider = tabContext.Provider;
// @ts-ignore
TabContextProvider.displayName = 'TabContextProvider';
var useTabsContext = function () {
    var context = useContext(tabContext);
    if (!context || !context.setActiveTabName) {
        console.warn('useTabsContext needs to be inside of the Tabs component');
    }
    return context;
};
export { useTabsContext, TabContextProvider };
//# sourceMappingURL=Tabs.context.js.map