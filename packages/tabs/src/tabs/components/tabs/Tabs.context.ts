import {createContext, useContext} from "react";

const tabContext = createContext<{
  activeTabName: string | null;
  setActiveTabName: (name: string) => void,
}>({
  activeTabName: null,
  // @ts-ignore
  setActiveTabName: (name: string) => {/* noop */},
})

const TabContextProvider = tabContext.Provider
// @ts-ignore
TabContextProvider.displayName = 'TabContextProvider'

const useTabsContext = () => useContext(tabContext)


export { useTabsContext, TabContextProvider}