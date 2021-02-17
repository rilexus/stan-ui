import { useCallback } from 'react';
import { useTabsContext } from "../tabs/Tabs.context";
var TabButton = function (_a) {
    var children = _a.children;
    var tabContext = useTabsContext();
    var setActiveTabName = useCallback(function (name) {
        tabContext.setActiveTabName(name);
    }, [tabContext.setActiveTabName]);
    return children(setActiveTabName);
};
export { TabButton };
//# sourceMappingURL=TabButton.js.map