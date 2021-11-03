import { CSSProperties, FC, ReactNode } from 'react';
export interface TabsItemProps {
    index?: string;
    disabled?: boolean;
    className?: string;
    style?: CSSProperties;
    label?: ReactNode;
    children?: ReactNode;
}
declare const TabItem: FC<TabsItemProps>;
export default TabItem;
