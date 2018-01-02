import React,{ Component } from 'react';
import {connect} from "react-redux";

import C from "../constants";

import TimerList from "./TimerList";
import Settings from "./Settings";

// TODO: Add row with cols

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <h1 className="hide">Candle Timer</h1>
            <h1>EST: {this.props.est}</h1>            
          </div>
          <div className="col-sm-4">
            <Settings/>
          </div>
        </div>
        <br/>
        <TimerList />
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
