import React, {Component} from 'react';
import sImg from './images/bag460x460.jpg'

class smallImage extends Component {
    mouseEnter() {
        document.getElementById("zoom-wrapper").style.display = 'block';
    };

    mouseMove(e) {
        var x = e.clientX;
        var y = e.clientY;
        var div = document.getElementById('choose-area');
        var zoom = document.getElementById('zoom-img');
        if (x >= 55 && x <= 440) {
            div.style.left = (x - 55) + 'px';
        };
        if (y >= 55 && y <= 440) {
            div.style.top = (y - 55) + 'px';
        };
            if (x >= 0 && x <= 44) {
            zoom.style.left = -(x * 3) + 'px';
        };
        if (y >= 0 && y <= 464) {
            zoom.style.bottom =  (y * 3) + 'px';
        };
    }

    mouseOut() {
        document.getElementById("choose-area").style.top = '150px';
        document.getElementById("choose-area").style.left = '150px';
        document.getElementById("zoom-wrapper").style.display = 'none';
    };

    render() {
        return (
            <div className="small-image" onMouseMove={this.mouseMove}>
                <div id="choose-area" onMouseOut={this.mouseOut}></div>
                <img id="sp" src={sImg} onMouseEnter={this.mouseEnter} alt="help"/>
            </div>
        );
    }
}
export default smallImage;