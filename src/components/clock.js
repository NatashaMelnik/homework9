import React from 'react';
import ReactDOM from 'react-dom';
import Selector from './Selector'
import './clockstyle.css'

function clock() {

    function tick() {

        ReactDOM.render(
            <div className = 'localTime' >

                <p>Local time: {new Date().toLocaleTimeString()}</p>
                <Selector />

            </div>,
            document.getElementById('root')
        );
    }

    setInterval(tick, 1000);

}

export default clock 