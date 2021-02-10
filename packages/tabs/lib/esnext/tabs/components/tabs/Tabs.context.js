import { createContext, useContext } from "react";
const tabContext = createContext({
    activeTabName: null,
    // @ts-ignore
    setActiveTabName: (name) => { },
});
const TabContextProvider = tabContext.Provider;
// @ts-ignore
TabContextProvider.displayName = 'TabContextProvider';
const useTabsContext = () => useContext(tabContext);
export { useTabsContext, TabContextProvider };
//# sourceMappingURL=Tabs.context.js.map