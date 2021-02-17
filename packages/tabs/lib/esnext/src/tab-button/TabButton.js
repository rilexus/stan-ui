import { useCallback } from 'react';
import { useTabsContext } from "../tabs/Tabs.context";
const TabButton = ({ children }) => {
    const tabContext = useTabsContext();
    const setActiveTabName = useCallback((name) => {
        tabContext.setActiveTabName(name);
    }, [tabContext.setActiveTabName]);
    return children(setActiveTabName);
};
export { TabButton };
//# sourceMappingURL=TabButton.js.map