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
        if ((x >= 95 && x <= 405)) {
            div.style.left = (x - 95) + 'px';
            zoom.style.marginLeft = -(x * 4) + 'px';
        }
        ;
        if (y >= 90 && y <= 405) {
            div.style.top = (y - 95) + 'px';
            zoom.style.marginTop =  -(y * 4) + 'px';
        };
    };

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