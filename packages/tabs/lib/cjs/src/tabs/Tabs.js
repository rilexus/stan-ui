"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabs = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var Tabs_context_1 = require("./Tabs.context");
var buildTabChangeEvent = function (name) {
    return {
        target: {
            name: name
        }
    };
};
var Tabs = function (_a) {
    var activeTabName = _a.activeTabName, children = _a.children, onTabChange = _a.onTabChange;
    var _b = react_1.useState(function () { return activeTabName; }), _activeTab = _b[0], _setActiveTab = _b[1];
    var isControlled = !!onTabChange;
    var getActiveTag = react_1.useCallback(function () {
        if (isControlled) {
            // if controlled return the activeTabName passed as props
            return activeTabName;
        }
        return _activeTab;
    }, [_activeTab, isControlled, activeTabName]);
    var setActiveTabName = react_1.useCallback(function (name) {
        if (isControlled) {
            // delegate setting of the name to the parent of this component (Tabs)
            onTabChange(buildTabChangeEvent(name));
        }
        else {
            _setActiveTab(function () { return name; });
        }
    }, [_setActiveTab, onTabChange]);
    var contextValue = react_1.useMemo(function () {
        return {
            activeTabName: getActiveTag(),
            setActiveTabName: setActiveTabName,
        };
    }, [getActiveTag, setActiveTabName]);
    return (react_1.default.createElement(Tabs_context_1.TabContextProvider, { value: contextValue }, children));
};
exports.Tabs = Tabs;
//# sourceMappingURL=Tabs.js.map