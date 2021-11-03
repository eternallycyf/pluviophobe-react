import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from '../Icon';
import Progress from '../Progress';
export const UploadList = (props) => {
    const { fileList, onRemove, } = props;
    return (_jsx("ul", Object.assign({ className: "pl-upload-list" }, { children: fileList.map(item => {
            return (_jsxs("li", Object.assign({ className: "pl-upload-list-item" }, { children: [_jsxs("span", Object.assign({ className: `file-name file-name-${item.status}` }, { children: [_jsx(Icon, { icon: "file-alt", theme: "secondary" }, void 0), item.name] }), void 0), _jsxs("span", Object.assign({ className: "file-status" }, { children: [(item.status === 'uploading' || item.status === 'ready') && _jsx(Icon, { icon: "spinner", spin: true, theme: "primary" }, void 0), item.status === 'success' && _jsx(Icon, { icon: "check-circle", theme: "success" }, void 0), item.status === 'error' && _jsx(Icon, { icon: "times-circle", theme: "danger" }, void 0)] }), void 0), _jsx("span", Object.assign({ className: "file-actions" }, { children: _jsx(Icon, { icon: "times", onClick: () => { onRemove(item); } }, void 0) }), void 0), item.status === 'uploading' &&
                        _jsx(Progress, { percent: item.percent || 0 }, void 0)] }), item.uid));
        }) }), void 0));
};
export default UploadList;
