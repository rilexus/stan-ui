import React, { ReactNode } from 'react';
interface TabButtonProps {
    children: (setActiveTabName: (name: string) => void) => ReactNode;
}
declare const TabButton: ({ children }: TabButtonProps) => React.ReactNode;
export { TabButton };
