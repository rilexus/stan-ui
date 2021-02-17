import React, { useCallback, useMemo, useState } from 'react';
import { TabContextProvider } from "./Tabs.context";
const buildTabChangeEvent = (name) => {
    return {
        target: {
            name: name
        }
    };
};
const Tabs = ({ activeTabName, children, onTabChange }) => {
    const [_activeTab, _setActiveTab] = useState(() => activeTabName);
    const isControlled = !!onTabChange;
    const getActiveTag = useCallback(() => {
        if (isControlled) {
            // if controlled return the activeTabName passed as props
            return activeTabName;
        }
        return _activeTab;
    }, [_activeTab, isControlled, activeTabName]);
    const setActiveTabName = useCallback((name) => {
        if (isControlled) {
            // delegate setting of the name to the parent of this component (Tabs)
            onTabChange(buildTabChangeEvent(name));
        }
        else {
            _setActiveTab(() => name);
        }
    }, [_setActiveTab, onTabChange]);
    const contextValue = useMemo(() => {
        return {
            activeTabName: getActiveTag(),
            setActiveTabName: setActiveTabName,
        };
    }, [getActiveTag, setActiveTabName]);
    return (React.createElement(TabContextProvider, { value: contextValue }, children));
};
export { Tabs };
//# sourceMappingURL=Tabs.js.map