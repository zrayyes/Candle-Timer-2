import React, { Component } from 'react';
import C from "../constants";


export default class TimerItem extends Component {

    seconds;
    minutes;

    doMath() {
        let time = this.props.est.split(":");
        this.minutes = ((time[0] - 9) * 60 + time[1])%this.props.minute;
        this.seconds = 60-time[2];
    };

    vibrate(){
        navigator.vibrate([300,300,300]);
    }
    
    render() {
        this.doMath();
        return (
            <div>
                <li className={(this.minutes > 0) ?
                    "list-group-item list-group-item-success" : 
                    "list-group-item list-group-item-danger"}>
                    {this.props.minute} | {this.minutes}:{this.seconds}
                    <button onClick={this.vibrate}>Click</button>
                </li>
            </div>
        );
    }
}

// TODO: Detect final minute
// TODO: Vibrate/Make sound for final minute