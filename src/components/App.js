import React, { Component } from 'react';
import { connect } from "react-redux";
import TimerList from "./TimerList";
import { slide as Menu } from 'react-burger-menu'

class App extends Component {

  showSettings(event) {
    event.preventDefault();
    console.log('click');
  }

  render() {
    return (
      <div>
        <Menu isOpen={false}>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
        </Menu>
        <div className="container">
          <div className="row">
            <div >
              {/* <h1>Candle Timer</h1> */}
              <h1>EST: {this.props.est}</h1>
            </div>
          </div>
          <br />
          <TimerList />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    est: state.est
  };
}

export default connect(mapStateToProps)(App);
