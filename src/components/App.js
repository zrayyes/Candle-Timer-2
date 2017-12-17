import React,{ Component } from 'react';
import {connect} from "react-redux";

import C from "../constants";

import {TimerList} from "./TimerList";


// moment().utcOffset(-5).format('HH:mm:ss')

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1>{this.props.est}</h1>
        {/* <TimerList 
        est={this.state.est} 
        minutes={this.state.minutes}/> */}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
      est: state.est
  };
}

export default connect(mapStateToProps)(App);
