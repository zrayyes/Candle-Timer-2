import React,{ Component } from 'react';

import C from "../constants";

import {TimerList} from "./TimerList";

// moment().utcOffset(-5).format('HH:mm:ss')

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        est: '00:00:00'
    };
  }
  
  render() {
    this.props.store.subscribe(()=>(
      this.setState({est: this.props.store.getState().est})
    ));  

    return (
      <div className="container">
        <h1 className="text-center">
          {this.state.est}
        </h1>
        {/* <TimerList 
        est={this.state.est} 
        minutes={this.state.minutes}/> */}
      </div>
    );
  }
}

export default App;
