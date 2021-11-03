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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
    return (_jsx(_Fragment, { children: _jsxs("div", Object.assign({ className: classes, style: style }, { children: [prepend && _jsx("div", Object.assign({ className: "pl-input-group-prepend" }, { children: prepend }), void 0), icon && _jsx("div", Object.assign({ className: "icon-wrapper" }, { children: _jsx(Icon, { icon: icon, title: `title-${icon}` }, void 0) }), void 0), _jsx("input", Object.assign({ className: "pl-input-inner", disabled: disabled }, restProps), void 0), append && _jsx("div", Object.assign({ className: "pl-input-group-append" }, { children: append }), void 0)] }), void 0) }, void 0));
};
export default Input;
