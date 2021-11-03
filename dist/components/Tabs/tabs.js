import React, { Children, cloneElement, createContext } from 'react';
export const TabsContext = createContext({ index: '0' });
const Tabs = (props) => {
    const { defaultIndex = '0', onSelect, className = "", children, style = {}, mode = 'default', } = props;
    const classes = `pl-tabs-${mode === 'card' ? 'card' : 'default'} tabs-horizontal ${className} `;
    const [currentActive, setCurrentActive] = React.useState(defaultIndex);
    const handleClick = (index) => {
        setCurrentActive(index);
        onSelect && onSelect(index);
    };
    const passedContext = {
        index: currentActive || '0',
        onSelect: handleClick
    };
    const renderChildren = () => {
        return Children.map(children, (child, index) => {
            const childElement = child;
            const { displayName } = childElement.type;
            return displayName === 'TabItem' ?
                cloneElement(childElement, { index: index.toString() }) :
                console.error('Warning: Tabs has a child which is not a MenuItem Component');
        });
    };
    const renderChildrenContext = () => {
        return Children.map(children, (child, index) => {
            const childElement = child;
            const { displayName } = childElement.type;
            return displayName === 'TabItem' && currentActive === index.toString() && childElement.props.children;
        });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("ul", { className: classes, style: style },
            React.createElement(TabsContext.Provider, { value: passedContext }, renderChildren())),
        React.createElement("div", null, renderChildrenContext())));
};
export default Tabs;
