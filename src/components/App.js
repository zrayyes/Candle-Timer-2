import React,{ Component } from 'react';
import {connect} from "react-redux";

import C from "../constants";

import TimerList from "./TimerList";
import Settings from "./Settings";


class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>{this.props.est}</h1>
        <Settings/>
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
