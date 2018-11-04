import React, { Component } from 'react';
import { connect } from "react-redux";
import moment from "moment-timezone";
import { Icon } from 'semantic-ui-react'
import { removeTimer } from '../actions/actions';
import { bindActionCreators } from 'redux';
import { Howl, Howler } from "howler";

const sound = new Howl({
    src: ['./ding.wav'],
});

const selected = [3, 5, 8, 13, 89, 233, 377];

class TimerItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            candleCounter: 1,
            minute: 0,
            seconds: 0
        };
    }

    componentDidMount() {
        this.tick();

        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        // Start at 9:30
        let hourStart = 9;
        let minuteStart = 30;

        // Check if it's the 60 minute timer and start at 9:00
        if (this.props.minute === 60) {
            minuteStart = 0;
        }

        let time = moment().tz("America/New_York").format('HH:mm:ss').split(":");
        let tempCandle = Math.floor((((time[0] - hourStart) * 60) + (time[1] - minuteStart)) / this.props.minute) + 1;
        let tempMinute = this.props.minute - (((time[0] - hourStart) * 60 + (time[1] - minuteStart)) % (this.props.minute)) - 1;
        let tempSeconds = 60 - time[2];
        this.setState({
            candleCounter: tempCandle,
            minute: tempMinute,
            seconds: tempSeconds
        })
        this.notify();
    }


    // Play a sound or vibrate when reaching the final minute in a timer
    notify() {
        if (this.props.vibrate.on && ((this.state.minute === 1) && (this.state.seconds === 59)) && selected.includes(this.props.minute)) {
            Howler.volume(this.props.sound.volume / 100);
            sound.play();
            navigator.vibrate(this.props.vibrate.duration);
        }
    }

    render = () => (
        <div className="boxy unselectable">
            {/* Check if last or first minute */}
            <li className={(this.state.minute === 0)
                ? "list-group-item list-group-item-red"
                : (this.state.minute === 1)
                    ? "list-group-item list-group-item-orange"
                    : "list-group-item list-group-item-green"}>
                {(this.state.minute > 10)
                    ? `${this.props.minute} | ${this.state.minute} | ${this.state.candleCounter}`
                    : `${this.props.minute} | ${this.state.minute}:${this.state.seconds} | ${this.state.candleCounter}`}
                <Icon fitted name='close' onClick={e => this.props.removeTimer(this.props.minute)} />
            </li>
        </div>
    );
}


function mapStateToProps(state) {
    return {
        sound: state.sound,
        vibrate: state.vibrate
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removeTimer }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerItem);