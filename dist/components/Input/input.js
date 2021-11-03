var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import Icon from '../Icon';
const Input = (props) => {
    const { disabled, size, icon, prepend, append, style, className } = props, restProps = __rest(props, ["disabled", "size", "icon", "prepend", "append", "style", "className"]);
    const classes = `
     pl-input-wrapper 
     ${className}
     ${disabled && 'is-disabled'} 
     ${(prepend || append) && 'input-group'} 
     input-size-${size}
     ${!!append && 'input-group-append'}
     ${!!prepend && 'input-group-prepend'}
  `;
    const fixControlledValue = (value) => {
        if (typeof value === 'undefined' || value === null) {
            return '';
        }
        return value;
    };
    if ('value' in props) {
        delete restProps.defaultValue;
        restProps.value = fixControlledValue(props.value);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classes, style: style },
            prepend && React.createElement("div", { className: "pl-input-group-prepend" }, prepend),
            icon && React.createElement("div", { className: "icon-wrapper" },
                React.createElement(Icon, { icon: icon, title: `title-${icon}` })),
            React.createElement("input", Object.assign({ className: "pl-input-inner", disabled: disabled }, restProps)),
            append && React.createElement("div", { className: "pl-input-group-append" }, append))));
};
export default Input;
