import React, { useContext, useState, Children, cloneElement } from 'react';
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
        return (React.createElement(Transition, { in: menuOpen, timeout: 300, animation: "zoom-in-top" },
            React.createElement("ul", { className: subMenuClasses }, childComponent)));
    };
    return (React.createElement("li", Object.assign({ key: index, className: classes }, hoverEvents),
        React.createElement("div", Object.assign({ className: 'submenu-title' }, clickEvents),
            title,
            React.createElement(Icon, { icon: "angle-down", className: "arrow-icon" })),
        renderChildren()));
};
SubMenu.displayName = 'SubMenu';
export default SubMenu;
