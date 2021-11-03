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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import Icon from '../Icon';
const Alert = (props) => {
    const { type = 'success', className = 'alert', message = null, closable = true, description = null, showIcon = true } = props, restProps = __rest(props, ["type", "className", "message", "closable", "description", "showIcon"]);
    const classes = `alert  alert-content ${className} alert-${type}`;
    let close = closable ? 'block' : 'none';
    let [divClose, setDivClose] = React.useState('block');
    return (_jsx("div", Object.assign({ style: { display: `${divClose}` } }, { children: _jsxs("div", Object.assign({ className: classes }, restProps, { children: [_jsxs("div", Object.assign({ style: { minHeight: '50px', lineHeight: "50px", display: "flex", justifyContent: "center" } }, { children: [showIcon &&
                            _jsx("div", Object.assign({ style: { display: "inline-block", padding: "4px" } }, { children: _jsx(Icon, { className: 'far', theme: `${type}`, size: '2x', icon: type === 'success' ? 'check-circle' : type === 'error' ? 'times-circle' : 'exclamation-circle' }, void 0) }), void 0), _jsx("span", Object.assign({ style: { fontWeight: 700 } }, { children: message }), void 0)] }), void 0), _jsx("button", Object.assign({ onClick: () => setDivClose('none'), style: { display: `${close}` }, className: 'alert-icon alert-close-icon' }, { children: _jsx(Icon, { theme: `${type}`, icon: 'times' }, void 0) }), void 0), _jsx("div", Object.assign({ className: 'alert-description alert-with-description' }, { children: description }), void 0)] }), void 0) }), void 0));
};
export default Alert;
