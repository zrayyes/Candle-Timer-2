import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { connect } from "react-redux";


class Sidebar extends Component {

    render = () => (
        <Menu isOpen={false}>
            <form>

            </form>
        </Menu>
    );
}


function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(Sidebar);
