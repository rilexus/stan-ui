import {ReactNode} from 'react';
import {useTabsContext} from "../tabs/Tabs.context";

interface TabProps {
  children: ReactNode;
  name: string
}

const Tab = ({children, name}: TabProps) => {
  const tabContext = useTabsContext()
  return tabContext.activeTabName === name ? children: null;
};

export {Tab};