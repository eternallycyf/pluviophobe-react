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
import React, { useEffect, useRef, useState } from 'react';
import Input from '../Input/input';
import Icon from '../Icon';
import Transition from '../Transition/transition';
import useDebounce from '../../hooks/useDebounce';
import useClickOutside from '../../hooks/useClickOutside';
// 按 esc 退出 按 enter 选中
// 点击选中 点击其他区域关闭菜单
// 防抖
const AutoComplete = (props) => {
    const { fetchSuggestions = () => [], onSelect, value, renderOption } = props, restProps = __rest(props, ["fetchSuggestions", "onSelect", "value", "renderOption"]);
    const [inputValue, setInputValue] = useState(value);
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [highlightIndex, setHighlightIndex] = useState(-1);
    const triggerSearch = useRef(false);
    const componentRef = useRef(null);
    const useDebounceValue = useDebounce(inputValue, 500);
    useClickOutside(componentRef, () => { setSuggestions([]); });
    useEffect(() => {
        if (useDebounceValue && triggerSearch.current) {
            const results = fetchSuggestions(useDebounceValue);
            if (results instanceof Promise) {
                setLoading(true);
                results.then(data => {
                    setLoading(false);
                    setSuggestions(data);
                    if (data.length > 0) {
                        setShowDropdown(true);
                    }
                });
            }
            else {
                setSuggestions(results);
                setShowDropdown(true);
                if (results.length > 0) {
                    setShowDropdown(true);
                }
            }
        }
        else {
            setShowDropdown(false);
        }
        setHighlightIndex(-1);
    }, [useDebounceValue, fetchSuggestions]);
    const handleChange = (e) => {
        const value = e.target.value.trim();
        setInputValue(value);
        triggerSearch.current = true;
    };
    const highlight = (index) => {
        if (index < 0)
            index = 0;
        if (index >= suggestions.length) {
            index = suggestions.length - 1;
        }
        setHighlightIndex(index);
    };
    const handleKeyDown = (e) => {
        switch (e.keyCode) {
            case 13:
                if (suggestions[highlightIndex]) {
                    handleSelect(suggestions[highlightIndex]);
                }
                break;
            case 38:
                highlight(highlightIndex - 1);
                break;
            case 40:
                highlight(highlightIndex + 1);
                break;
            case 27:
                setShowDropdown(false);
                break;
            default:
                break;
        }
    };
    const renderTemplate = (item) => renderOption ? renderOption(item) : item.value;
    const handleSelect = (item) => {
        setInputValue(item.value);
        setShowDropdown(false);
        onSelect && onSelect(item);
        triggerSearch.current = false;
    };
    const generateDropdown = () => (React.createElement(Transition, { in: showDropdown || loading, animation: "zoom-in-top", timeout: 300, onExited: () => { setSuggestions([]); } },
        React.createElement("ul", { className: "pl-suggestion-list" }, suggestions.map((item, index) => {
            const cnames = `suggestion-item ${index === highlightIndex && 'is-active'}`;
            return (React.createElement("li", { key: index, className: cnames, onClick: () => handleSelect(item) }, renderTemplate(item)));
        }))));
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'pl-auto-complete', ref: componentRef },
            React.createElement(Input, Object.assign({ value: inputValue, onChange: handleChange, onKeyDown: handleKeyDown }, restProps)),
            loading &&
                React.createElement("div", { className: "suggstions-loading-icon" },
                    React.createElement(Icon, { icon: "spinner", size: '6x', spin: true })),
            suggestions.length > 0 && generateDropdown())));
};
export default AutoComplete;
