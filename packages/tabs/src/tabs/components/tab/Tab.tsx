import {useTabsContext} from "../tabs/Tabs.context";

// interface TabProps {
//   name: string
//   children: any;
// }

const Tab = ({children, name}: any): any => {
  const tabContext = useTabsContext()
  return tabContext.activeTabName === name ? children: null;
};

export {Tab};