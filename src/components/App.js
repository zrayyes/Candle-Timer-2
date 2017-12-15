import React,{ Component } from 'react';
import {TimerList} from "./TimerList";
import moment from "moment";

// moment().utcOffset(-5).format('HH:mm:ss')

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        est: '00:00:00',
        minutes: [3,5]
    };
  }
  
  startTimer(){
    this.timerId = setInterval(()=>{
      this.setState({est: moment().format('HH:mm:ss')})
    }, 1000);
  }

  render() {
    this.startTimer();
    return (
      <div className="container">
        <h1 className="text-center">
          {this.state.est}
        </h1>
        <TimerList est={this.state.est} minutes={this.state.minutes}/>
      </div>
    );
  }
}

export default App;
