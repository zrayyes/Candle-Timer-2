import React, { Component } from 'react';
import { connect } from "react-redux";
import TimerList from "./TimerList";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

  showSettings(event) {
    event.preventDefault();
    console.log('click');
  }

  render = () => (
    <MuiThemeProvider>
      <Sidebar />
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <br />
        <TimerList />
      </div>
    </MuiThemeProvider>
  );
}


function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(App);
