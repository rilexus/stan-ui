import { useTabsContext } from "../tabs/Tabs.context";
// interface TabProps {
//   name: string
//   children: any;
// }
var Tab = function (_a) {
    var children = _a.children, name = _a.name;
    var tabContext = useTabsContext();
    return tabContext.activeTabName === name ? children : null;
};
export { Tab };
//# sourceMappingURL=Tab.js.map