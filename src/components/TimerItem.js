import React, { Component } from 'react';
import C from "../constants";
import {connect} from "react-redux";

let minutes = 0;
let seconds = 0;

class TimerItem extends Component {

    doMath() {
        let time = this.props.est.split(":");
        minutes = this.props.minute - (((time[0] - 9) * 60 + (time[1] - 30))%(this.props.minute)) - 1;
        seconds = 60-time[2];
    };

    vibrate(){
        console.log(this);
        // if(this.props.vibrate){
        //     navigator.vibrate([300,300,300]);
        // }
    }
    
    render() {
        this.doMath();
        return (
            <div>
                <li className={(minutes > 0) ?
                    "list-group-item list-group-item-success" : 
                    "list-group-item list-group-item-danger"}>
                    {this.props.minute} | {minutes}:{seconds}
                    <button onClick={this.vibrate}>Click</button>
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

// TODO: Detect final minute
// TODO: Vibrate/Make sound for final minute