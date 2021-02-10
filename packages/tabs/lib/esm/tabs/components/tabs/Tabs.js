import React, { useCallback, useMemo, useState } from 'react';
import { TabContextProvider } from "./Tabs.context";
// interface TabsProps {
//   activeTabName: string;
//   children?: ReactElement;
//   onTabChange?: (e: TabChangeEvent) => void
// }
var buildTabChangeEvent = function (name) {
    return {
        target: {
            name: name
        }
    };
};
var Tabs = function (_a) {
    var activeTabName = _a.activeTabName, children = _a.children, onTabChange = _a.onTabChange;
    var _b = useState(function () { return activeTabName; }), _activeTab = _b[0], _setActiveTab = _b[1];
    var isControlled = !!onTabChange;
    var getActiveTag = useCallback(function () {
        if (isControlled) {
            // if controlled return the activeTabName passed as props
            return activeTabName;
        }
        return _activeTab;
    }, [_activeTab, isControlled, activeTabName]);
    var setActiveTabName = useCallback(function (name) {
        if (isControlled) {
            // delegate setting of the name to the parent of this component (Tabs)
            onTabChange(buildTabChangeEvent(name));
        }
        else {
            _setActiveTab(function () { return name; });
        }
    }, [_setActiveTab, onTabChange]);
    var contextValue = useMemo(function () {
        return {
            activeTabName: getActiveTag(),
            setActiveTabName: setActiveTabName,
        };
    }, [getActiveTag, setActiveTabName]);
    return (React.createElement(TabContextProvider, { value: contextValue }, children));
};
export { Tabs };
//# sourceMappingURL=Tabs.js.map