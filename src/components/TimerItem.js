import React, { Component } from 'react';
import C from "../constants";
import {connect} from "react-redux";

let minutes = 0;
let seconds = 0;

class TimerItem extends Component {

    // Calculate time untill next candle
    doMath() {
        // Start at 9:30
        let hourStart = 9;
        let minuteStart = 30;
        
        // Check if it's the 60 minute timer and start at 10:00
        if (this.props.minute === 60){
            hourStart = 10;
            minuteStart = 0;
        }
        
        let time = this.props.est.split(":");
        minutes = this.props.minute - (((time[0] - hourStart) * 60 + (time[1] - minuteStart))%(this.props.minute)) - 1;
        seconds = 60-time[2];
    };

    // Play a sound or vibrate when reaching the final minute in a timer
    notify(){
        if(this.props.vibrate.enabled && ((minutes === 0) && (seconds === 59))){
            navigator.vibrate(this.props.vibrate.duration);
        }
    }
    
    render() {
        this.doMath();
        this.notify();
        return (
            <div>
                <li className={(minutes > 0) ?
                    "list-group-item list-group-item-success" : 
                    "list-group-item list-group-item-danger"}>
                    {this.props.minute} | {minutes}:{seconds}
                </li>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        est: state.est,
        sound: state.sound,
        vibrate: state.vibrate
    };
  }
  
export default connect(mapStateToProps)(TimerItem);