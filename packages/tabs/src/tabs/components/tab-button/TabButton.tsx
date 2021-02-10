import { ReactNode, useCallback} from 'react';
import {useTabsContext} from "../tabs/Tabs.context";

interface TabButtonProps {
  children: (
    setActiveTabName: (name: string) => void,
  ) => ReactNode
}

const TabButton = ({children}: TabButtonProps): any => {
  const tabContext = useTabsContext()

  const setActiveTabName = useCallback<(name: string)=>void>((name: string): void => {
    tabContext.setActiveTabName(name)
  }, [tabContext.setActiveTabName])

  return children(setActiveTabName)
};

export {TabButton};