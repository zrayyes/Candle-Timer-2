import React, { Component } from 'react';
import {TimerItem} from "./TimerItem";
import {connect} from "react-redux";

import C from "../constants";

class TimerList extends Component {
    render() {
        return (
            <ul className="list-group">
                {this.props.minutes.map((minute) => {
                    return (
                        <TimerItem
                            est={this.props.est}
                            minute={minute}
                            key={minute}
                        />
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