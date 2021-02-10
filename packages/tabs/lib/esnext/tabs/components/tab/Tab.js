import { useTabsContext } from "../tabs/Tabs.context";
// interface TabProps {
//   name: string
//   children: any;
// }
const Tab = ({ children, name }) => {
    const tabContext = useTabsContext();
    return tabContext.activeTabName === name ? children : null;
};
export { Tab };
//# sourceMappingURL=Tab.js.map