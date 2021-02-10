declare const TabContextProvider: import("react").Provider<{
    activeTabName: string | null;
    setActiveTabName: (name: string) => void;
}>;
declare const useTabsContext: () => {
    activeTabName: string | null;
    setActiveTabName: (name: string) => void;
};
export { useTabsContext, TabContextProvider };
