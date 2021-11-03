import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
export const Dragger = (props) => {
    const { onFile, children } = props;
    const [dragOver, setDragOver] = useState(false);
    const klass = `pl-uploader-dragger ${dragOver && 'is-dragover'}`;
    const handleDrop = (e) => {
        e.preventDefault();
        setDragOver(false);
        onFile(e.dataTransfer.files);
    };
    const handleDrag = (e, over) => {
        e.preventDefault();
        setDragOver(over);
    };
    return (_jsx("div", Object.assign({ className: klass, onDragOver: e => { handleDrag(e, true); }, onDragLeave: e => { handleDrag(e, false); }, onDrop: handleDrop }, { children: children }), void 0));
};
export default Dragger;
