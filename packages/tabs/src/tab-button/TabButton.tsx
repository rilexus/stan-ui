import {ReactElement, useCallback} from 'react';
import {useTabsContext} from "../tabs/Tabs.context";

interface TabButtonProps {
  children: (
    setActiveTabName: (name: string) => void,
  ) => ReactElement
}

const TabButton = ({children}: TabButtonProps):  ReactElement => {
  const tabContext = useTabsContext()

  const setActiveTabName = useCallback<(name: string)=>void>((name: string): void => {
    tabContext.setActiveTabName(name)
  }, [tabContext.setActiveTabName])

  return children(setActiveTabName)
};

export {TabButton};