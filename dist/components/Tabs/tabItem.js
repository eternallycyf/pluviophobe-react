import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext } from 'react';
import { TabsContext } from './tabs';
const TabItem = (props) => {
    const { index = '0', disabled = false, className = '', style = {}, children, label = "", } = props;
    const context = useContext(TabsContext);
    const classes = `tabs-item ${className} ${disabled && 'is-disabled'} ${context.index === index && 'is-active'}`;
    const handleClick = () => {
        context.onSelect && !disabled && context.onSelect(index);
    };
    return (_jsx(_Fragment, { children: _jsx("li", Object.assign({ className: classes, style: style, onClick: handleClick }, { children: label }), void 0) }, void 0));
};
TabItem.displayName = 'TabItem';
export default TabItem;
