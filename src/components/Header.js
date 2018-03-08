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
            time: moment().utcOffset(-5).format('HH:mm:ss')
        });
    }
    render = () => (
        <div>
            <h1>EST: {this.state.time}</h1>
        </div>
    );
}

function mapStateToProps(state) { }

export default connect(mapStateToProps)(Header);
