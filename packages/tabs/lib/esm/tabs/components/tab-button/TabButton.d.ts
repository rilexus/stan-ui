import { ReactNode } from 'react';
interface TabButtonProps {
    children: (setActiveTabName: (name: string) => void) => ReactNode;
}
declare const TabButton: ({ children }: TabButtonProps) => any;
export { TabButton };
