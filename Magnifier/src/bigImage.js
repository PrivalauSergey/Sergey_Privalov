import React, { Component } from 'react';
import bImg from './images/bag2000x2000.jpg';

class bigImage extends Component {
    render() {
        return (
            <div id="zoom-wrapper">
                    <img id="zoom-img" src={bImg} alt="help"/>
            </div>
        );
    }
}
export default bigImage;