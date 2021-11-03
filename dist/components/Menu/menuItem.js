import React, { useContext } from "react";
import { MenuContext } from './menu';
const MenuItem = (props) => {
    const { index, disabled, className, style, children } = props;
    const context = useContext(MenuContext);
    const classes = `menu-item ${className} ${disabled && 'is-disabled'} ${context.index === index && 'is-active'}`;
    const handleClick = () => {
        context.onSelect && !disabled && typeof index === 'string' && context.onSelect(index);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("li", { className: classes, style: style, onClick: handleClick }, children)));
};
MenuItem.displayName = 'MenuItem';
export default MenuItem;
