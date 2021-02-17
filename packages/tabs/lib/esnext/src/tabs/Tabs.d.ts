import { ReactElement } from 'react';
declare type TabChangeEvent = {
    target: {
        name: string;
    };
};
interface TabsProps {
    activeTabName: string;
    children?: ReactElement | ReactElement[];
    onTabChange?: (e: TabChangeEvent) => void;
}
declare const Tabs: ({ activeTabName, children, onTabChange }: TabsProps) => ReactElement;
export { Tabs };
