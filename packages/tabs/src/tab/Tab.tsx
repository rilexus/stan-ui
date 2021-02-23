import {useTabsContext} from "../tabs/Tabs.context";
import {ReactElement} from "react";

interface TabProps {
  name: string
  children?: ReactElement;
}

const Tab = ({children, name}: TabProps): ReactElement => {
  const tabContext = useTabsContext()
  return tabContext.activeTabName === name ? children: null;
};

export {Tab};