import React from 'react';
import ReactDOM from 'react-dom';
import Selector from './Selector'
import './clockstyle.css'

class Clock extends React.Component {  // https://ru.reactjs.org/docs/rendering-elements.html was
    constructor(props) {               // =>
        super(props);                  // https://ru.reactjs.org/docs/state-and-lifecycle.html now
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className='localTime' >
                <p>Local time: {new Date().toLocaleTimeString()}</p>
                <Selector />
            </div>
        );
    }
}

function Clock_() {
    ReactDOM.render(
        <Clock />,
        document.getElementById('root')
    );
}

export default Clock_