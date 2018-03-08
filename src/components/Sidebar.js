import React, { Component } from 'react';
import { connect } from "react-redux";
import { slide as Menu } from 'react-burger-menu';

class Sidebar extends Component {

    render = () => (
        <Menu isOpen={false}>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
        </Menu>
    );
}


function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(Sidebar);
