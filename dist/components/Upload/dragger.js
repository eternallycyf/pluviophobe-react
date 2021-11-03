import React, { useState } from 'react';
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
    return (React.createElement("div", { className: klass, onDragOver: e => { handleDrag(e, true); }, onDragLeave: e => { handleDrag(e, false); }, onDrop: handleDrop }, children));
};
export default Dragger;
