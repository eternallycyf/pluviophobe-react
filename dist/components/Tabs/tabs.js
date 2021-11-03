import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs(_Fragment, { children: [_jsx("ul", Object.assign({ className: classes, style: style }, { children: _jsx(TabsContext.Provider, Object.assign({ value: passedContext }, { children: renderChildren() }), void 0) }), void 0), _jsx("div", { children: renderChildrenContext() }, void 0)] }, void 0));
};
export default Tabs;
