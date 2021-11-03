import React, { createContext, useState, Children, cloneElement } from 'react';
export const MenuContext = createContext({ index: '0' });
const Menu = (props) => {
    const { className, mode = 'horizontal', style, children, defaultIndex = '0', onSelect, defaultOpenSubMenus = [] } = props;
    const [currentActive, setCurrentActive] = useState(defaultIndex);
    const handleClick = (index) => {
        setCurrentActive(index);
        onSelect && onSelect(index);
    };
    const passedContext = {
        index: currentActive || '0',
        onSelect: handleClick,
        mode,
        defaultOpenSubMenus,
    };
    const renderChildren = () => {
        return Children.map(children, (child, index) => {
            const childElement = child;
            const { displayName } = childElement.type;
            return displayName === 'MenuItem' || displayName === 'SubMenu' ?
                cloneElement(childElement, { index: index.toString() }) :
                console.error('Warning: Menu has a child which is not a MenuItem Component');
        });
    };
    let classes = `pl-menu ${className} ${mode === 'vertical' ? 'menu-vertical' : 'menu-horizontal'}`;
    return (React.createElement(React.Fragment, null,
        React.createElement("ul", { className: classes, style: style },
            React.createElement(MenuContext.Provider, { value: passedContext }, renderChildren()))));
};
export default Menu;
