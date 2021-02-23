import {createContext, useContext} from "react";

type Context = {
  activeTabName: string | null;
  /* @ts-ignore */
  setActiveTabName: (name: string) => void,
}

const tabContext = createContext<Context>({
  activeTabName: null,
  // @ts-ignore
  setActiveTabName: (name: string) => {/* noop */},
})

const TabContextProvider = tabContext.Provider
// @ts-ignore
TabContextProvider.displayName = 'TabContextProvider'

const useTabsContext = (): Context => {
  const context = useContext(tabContext)
  if (!context || !context.setActiveTabName){
    console.warn('useTabsContext needs to be inside of the Tabs component')
  }
  return context
}


export { useTabsContext, TabContextProvider}