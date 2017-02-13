import React, { Component } from 'react';
import SmallImage from './smallImage';
import BigImage from './bigImage';
import './css/app.css';

class App extends Component {
    render() {
        return (
            <div className="magnifier">
                <SmallImage/>
                <BigImage/>
            </div>
        );
    }
}
export default App;

