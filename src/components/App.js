import React, { Component } from 'react';
import { connect } from "react-redux";
import TimerList from "./TimerList";
import Header from "./Header";
import Sidebar from "./Sidebar";

class App extends Component {

  showSettings(event) {
    event.preventDefault();
    console.log('click');
  }

  render = () => (
    <div>
      <Sidebar />
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <br />
        <TimerList />
      </div>
    </div>
  );
}


function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(App);
