import { ReactNode } from 'react';
declare type TabChangeEvent = {
    target: {
        name: string;
    };
};
interface TabsProps {
    activeTabName: string;
    children: ReactNode;
    onTabChange: (e: TabChangeEvent) => void | undefined;
}
declare const Tabs: ({ activeTabName, children, onTabChange }: TabsProps) => JSX.Element;
export { Tabs };
