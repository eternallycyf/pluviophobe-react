import { jsx as _jsx } from "react/jsx-runtime";
const Progress = (props) => {
    const { percent, strokeHeight = 15, showText = true, styles, theme = "primary", } = props;
    return (_jsx("div", Object.assign({ className: "pl-progress-bar", style: styles }, { children: _jsx("div", Object.assign({ className: "pl-progress-bar-outer", style: { height: `${strokeHeight}px` } }, { children: _jsx("div", Object.assign({ className: `pl-progress-bar-inner color-${theme}`, style: { width: `${percent}%` } }, { children: showText && _jsx("span", Object.assign({ className: "inner-text" }, { children: `${percent}%` }), void 0) }), void 0) }), void 0) }), void 0));
};
export default Progress;
