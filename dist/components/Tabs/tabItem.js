import React, { useContext } from 'react';
import { TabsContext } from './tabs';
const TabItem = (props) => {
    const { index = '0', disabled = false, className = '', style = {}, 
    // children,
    label = "", } = props;
    const context = useContext(TabsContext);
    const classes = `tabs-item ${className} ${disabled && 'is-disabled'} ${context.index === index && 'is-active'}`;
    const handleClick = () => {
        context.onSelect && !disabled && context.onSelect(index);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("li", { className: classes, style: style, onClick: handleClick }, label)));
};
TabItem.displayName = 'TabItem';
export default TabItem;
