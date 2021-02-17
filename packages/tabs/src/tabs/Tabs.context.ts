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

const useTabsContext = () => {
  const context = useContext(tabContext)
  if (!context || !context.setActiveTabName){
    console.warn('useTabsContext needs to be inside of the Tabs component')
  }
  return context
}


export { useTabsContext, TabContextProvider}