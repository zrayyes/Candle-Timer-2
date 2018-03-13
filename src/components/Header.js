import React, { Component } from 'react';
import { connect } from "react-redux";
import moment from "moment";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { time: null };
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
        this.setState({
            time: moment().utcOffset(-4).format('HH:mm:ss')
        });
    }
    render = () => (
        <div>
            <h1>EST: {this.state.time}</h1>
            <p>{this.props.sound}</p>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        sound: state.sound
    };
}

export default connect(mapStateToProps)(Header);
