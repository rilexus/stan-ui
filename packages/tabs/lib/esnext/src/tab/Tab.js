import { useTabsContext } from "../tabs/Tabs.context";
const Tab = ({ children, name }) => {
    const tabContext = useTabsContext();
    return tabContext.activeTabName === name ? children : null;
};
export { Tab };
//# sourceMappingURL=Tab.js.map