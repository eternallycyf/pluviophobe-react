import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext } from "react";
import { MenuContext } from './menu';
const MenuItem = (props) => {
    const { index, disabled, className, style, children } = props;
    const context = useContext(MenuContext);
    const classes = `menu-item ${className} ${disabled && 'is-disabled'} ${context.index === index && 'is-active'}`;
    const handleClick = () => {
        context.onSelect && !disabled && typeof index === 'string' && context.onSelect(index);
    };
    return (_jsx(_Fragment, { children: _jsx("li", Object.assign({ className: classes, style: style, onClick: handleClick }, { children: children }), void 0) }, void 0));
};
MenuItem.displayName = 'MenuItem';
export default MenuItem;
