import { createContext, useContext } from "react";
const tabContext = createContext({
    activeTabName: null,
    // @ts-ignore
    setActiveTabName: (name) => { },
});
const TabContextProvider = tabContext.Provider;
// @ts-ignore
TabContextProvider.displayName = 'TabContextProvider';
const useTabsContext = () => {
    const context = useContext(tabContext);
    if (!context || !context.setActiveTabName) {
        console.warn('useTabsContext needs to be inside of the Tabs component');
    }
    return context;
};
export { useTabsContext, TabContextProvider };
//# sourceMappingURL=Tabs.context.js.map