import React,{ Component } from 'react';
import {TimerList} from "./TimerList";
import moment from "moment";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        utc: '00:00:00',
        minutes: [3,5]
    };
  }
  
  startTimer(){
    this.timerId = setInterval(()=>{
      this.setState({utc: moment().utcOffset(-5).format('HH:mm:ss')})
    }, 1000);
  }

  render() {
    this.startTimer();
    return (
      <div className="container">
        <h1 className="text-center">
          {this.state.utc}
        </h1>
        <TimerList utc={this.state.utc} minutes={this.state.minutes}/>
      </div>
    );
  }
}

export default App;
