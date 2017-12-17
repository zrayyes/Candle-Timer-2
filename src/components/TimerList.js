import React, { Component } from 'react';
import {connect} from "react-redux";

import C from "../constants";

import TimerItem from "./TimerItem";


class TimerList extends Component {
    render() {
        return (
            <ul className="list-group">
                {this.props.minutes.map((minute) => {
                    return (
                        <TimerItem 
                        minute={minute}
                        est={this.props.est}
                        key={minute}/>
                    );
                })}
            </ul>
        )
    }
}

function mapStateToProps(state){
    return {
        minutes: state.timers,
        est: state.est
    };
  }
  
export default connect(mapStateToProps)(TimerList);