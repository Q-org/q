import React from 'react';
import { useState } from 'react'
import Popup from 'reactjs-popup';
import './modal.css';
const pp = ['0']
import Frame from 'react-frame-component';
import logger from '@docusaurus/logger';


export default function ({ pp }) {
    const [state, setState] = useState(pp);
    ;
    return (

        <Popup
            trigger={<button className="button button--primary"> Open Modal </button>}
            modal
            position="right center"
            closeOnDocumentClick={false}
            nested

        >
            {close => (

                <div className="modal">
                    <button className="close button--primary" onClick={close}>
                        &times;
                    </button>
                    <div className="header"> {state} </div>
                    <div className="content">
                        {' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                        Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                        delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                        Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                        delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                        Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                        delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                        commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                        explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
                    </div>
                    <div className="actions">
                        <Popup
                            trigger={<button className="button"> Trigger </button>}
                            position="right center"
                            nested
                        >
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                                magni omnis delectus nemo, maxime molestiae dolorem numquam
                                mollitia, voluptate ea, accusamus excepturi deleniti ratione
                                sapiente! Laudantium, aperiam doloribus. Odit, aut.
                            </span>
                        </Popup>
                        <button
                            className="button"
                            onClick={() => {
                                console.log('modal closed ');
                                close();
                            }}
                        >
                            关闭
                        </button>
                    </div>
                </div>
            )}
        </Popup>
    );
}