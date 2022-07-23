import React from 'react';
import Layout from '@theme/Layout';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";



export default function Hello() {
    return (
        <>

            <SimpleMDE />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    fontSize: '20px',
                }}>

                <p>
                    修改 <code>pages/helloReact.js</code>，然后保存，页面会重载。
                </p>
            </div>
        </>
    );
}