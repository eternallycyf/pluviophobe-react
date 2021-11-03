import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useState, Children, cloneElement } from 'react';
import { MenuContext } from './menu';
import Icon from '../Icon/Icon';
import Transition from '../Transition';
const SubMenu = (props) => {
    const { index, title, children, className } = props;
    const context = useContext(MenuContext);
    const openedSubMenus = context.defaultOpenSubMenus;
    const isOpened = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false;
    const [menuOpen, setMenuOpen] = useState(isOpened);
    const classes = `menu-item submenu-item ${className} ${context.index === index && 'is-active'} ${menuOpen && 'is-opened'} ${context.mode === 'vertical' && 'is-vertical'}`;
    const handleClick = (e) => {
        e.preventDefault();
        setMenuOpen(!menuOpen);
    };
    let timer;
    const handleMouse = (e, toggle) => {
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(() => {
            setMenuOpen(toggle);
        }, 300);
    };
    const clickEvents = context.mode === 'vertical' ? {
        onClick: handleClick
    } : {};
    const hoverEvents = context.mode !== 'vertical' ? {
        onMouseEnter: (e) => { handleMouse(e, true); },
        onMouseLeave: (e) => { handleMouse(e, false); }
    } : {};
    const renderChildren = () => {
        const subMenuClasses = `pl-submenu ${menuOpen && 'menu-opened'}`;
        const childComponent = Children.map(children, (child, i) => {
            const childElement = child;
            return childElement.type.displayName === 'MenuItem' ?
                cloneElement(childElement, { index: `${index}-${i}` }) :
                console.error('Warning: SubMenu has a child which is not a MenuItem Component');
        });
        return (_jsx(Transition, Object.assign({ in: menuOpen, timeout: 300, animation: "zoom-in-top" }, { children: _jsx("ul", Object.assign({ className: subMenuClasses }, { children: childComponent }), void 0) }), void 0));
    };
    return (_jsxs("li", Object.assign({ className: classes }, hoverEvents, { children: [_jsxs("div", Object.assign({ className: 'submenu-title' }, clickEvents, { children: [title, _jsx(Icon, { icon: "angle-down", className: "arrow-icon" }, void 0)] }), void 0), renderChildren()] }), index));
};
SubMenu.displayName = 'SubMenu';
export default SubMenu;
