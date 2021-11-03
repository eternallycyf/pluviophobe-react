import React from 'react';
const Progress = (props) => {
    const { percent, strokeHeight = 15, showText = true, styles, theme = "primary", } = props;
    return (React.createElement("div", { className: "pl-progress-bar", style: styles },
        React.createElement("div", { className: "pl-progress-bar-outer", style: { height: `${strokeHeight}px` } },
            React.createElement("div", { className: `pl-progress-bar-inner color-${theme}`, style: { width: `${percent}%` } }, showText && React.createElement("span", { className: "inner-text" }, `${percent}%`)))));
};
export default Progress;
