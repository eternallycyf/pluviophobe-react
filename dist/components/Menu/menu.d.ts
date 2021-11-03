import { CSSProperties, FC } from 'react';
declare type SelectCallback = (selectedIndex: string) => void;
declare type MenuMode = 'horizontal' | 'vertical';
export interface MenuProps {
    defaultIndex?: string;
    className?: string;
    mode?: MenuMode;
    style?: CSSProperties;
    onSelect?: SelectCallback;
    defaultOpenSubMenus?: string[];
}
interface IMenuContext {
    index?: string;
    onSelect?: SelectCallback;
    mode?: MenuMode;
    defaultOpenSubMenus?: string[];
}
export declare const MenuContext: import("react").Context<IMenuContext>;
declare const Menu: FC<MenuProps>;
export default Menu;
