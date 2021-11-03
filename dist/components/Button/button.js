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
import { jsx as _jsx } from "react/jsx-runtime";
const Button = (props) => {
    const { className = '', disabled = false, size = 'lg', type = 'primary', children = null, href = "javaScript:;" } = props, restProps = __rest(props, ["className", "disabled", "size", "type", "children", "href"]);
    const classes = `btn  ${className} btn-${type} btn-${size} ${disabled && "disabled"}`;
    if (type === 'link') {
        return (_jsx("a", Object.assign({ className: classes, href: href }, restProps, { children: children }), void 0));
    }
    return (_jsx("button", Object.assign({ className: classes, disabled: disabled }, restProps, { children: children }), void 0));
};
export default Button;
