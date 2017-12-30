import React, { Component } from 'react';
import {connect} from "react-redux";

import C from "../constants";

import TimerItem from "./TimerItem";

{/* <ul className="list-group">
{this.props.minutes.map((minute) => {
    return (
        <TimerItem 
        minute={minute}
        key={minute}/>
    );
})}
</ul> */}

class TimerList extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        minutes: state.timers
    };
  }
  
export default connect(mapStateToProps)(TimerList);