import React, { CSSProperties, FC, ReactNode } from 'react';
declare type onSelectCallBack = (index: string) => void;
export interface TabsProps {
    defaultIndex?: string;
    mode?: 'default' | 'card';
    onSelect?: onSelectCallBack;
    className?: string;
    children?: ReactNode;
    style?: CSSProperties;
}
export interface ITabsContext {
    index?: string;
    onSelect?: onSelectCallBack;
}
export declare const TabsContext: React.Context<ITabsContext>;
declare const Tabs: FC<TabsProps>;
export default Tabs;
