import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import Frame from 'react-frame-component';

export default () => {
    const [text, setText] = useState('hello md-editor-rt!');
    const [theme] = useState('light');
    return (
        <MdEditor modelValue={text} onChange={setText} theme={theme} />
    );
}