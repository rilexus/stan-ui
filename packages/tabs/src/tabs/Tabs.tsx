import React, {
  ReactElement,
  useCallback,
  useMemo,
  useState
} from 'react';
import {TabContextProvider} from "./Tabs.context";

type TabChangeEvent = {
  target: {
    name: string
  }
};

interface TabsProps {
  activeTabName: string;
  children?: ReactElement | ReactElement[];
  onTabChange?: (e: TabChangeEvent) => void
}

const buildTabChangeEvent = (name: string): TabChangeEvent => {
  return {
    target: {
      name: name
    }
  }
}

const Tabs = ({ activeTabName, children, onTabChange }: TabsProps): ReactElement => {
  const [_activeTab, _setActiveTab] = useState(() => activeTabName)

  const isControlled = !!onTabChange

  const getActiveTag = useCallback(() => {
    if (isControlled){
      // if controlled return the activeTabName passed as props
      return activeTabName
    }
    return _activeTab
  }, [_activeTab, isControlled, activeTabName])

  const setActiveTabName = useCallback((name: string) => {
    if (isControlled){
      // delegate setting of the name to the parent of this component (Tabs)
      onTabChange(buildTabChangeEvent(name))
    } else {
      _setActiveTab(() => name)
    }
  }, [_setActiveTab, onTabChange])

  const contextValue = useMemo(() => {
    return {
      activeTabName: getActiveTag(),
      setActiveTabName: setActiveTabName,
    }
  }, [getActiveTag, setActiveTabName])

  return (
    <TabContextProvider value={contextValue}>
      {children}
    </TabContextProvider>
  );
};

export {Tabs};