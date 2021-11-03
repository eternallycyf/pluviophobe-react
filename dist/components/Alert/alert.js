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
import React from "react";
import Icon from '../Icon';
const Alert = (props) => {
    const { type = 'success', className = 'alert', message = null, closable = true, description = null, showIcon = true } = props, restProps = __rest(props, ["type", "className", "message", "closable", "description", "showIcon"]);
    const classes = `alert  alert-content ${className} alert-${type}`;
    let close = closable ? 'block' : 'none';
    let [divClose, setDivClose] = React.useState('block');
    return (React.createElement("div", { style: { display: `${divClose}` } },
        React.createElement("div", Object.assign({ className: classes }, restProps),
            React.createElement("div", { style: { minHeight: '50px', lineHeight: "50px", display: "flex", justifyContent: "center" } },
                showIcon &&
                    React.createElement("div", { style: { display: "inline-block", padding: "4px" } },
                        React.createElement(Icon, { className: 'far', theme: `${type}`, size: '2x', icon: type === 'success' ? 'check-circle' : type === 'error' ? 'times-circle' : 'exclamation-circle' })),
                React.createElement("span", { style: { fontWeight: 700 } }, message)),
            React.createElement("button", { onClick: () => setDivClose('none'), style: { display: `${close}` }, className: 'alert-icon alert-close-icon' },
                React.createElement(Icon, { theme: `${type}`, icon: 'times' })),
            React.createElement("div", { className: 'alert-description alert-with-description' }, description))));
};
export default Alert;
