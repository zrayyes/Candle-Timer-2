import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { connect } from "react-redux";
import { Button, Form } from 'semantic-ui-react'
import { addTimer, resetTimers } from '../actions/actions';
import { bindActionCreators } from 'redux';

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newTimer: '',
            isOpen: true,
            error: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value, isOpen: true, error: false })

    handleSubmit = () => {
        const { newTimer } = this.state
        if (!isNaN(newTimer) && newTimer !== '') {
            this.props.addTimer(newTimer);
            this.setState({ isOpen: false });
        } else {
            this.setState({ error: true })
        }
    }


    render = () => (
        <Menu isOpen={this.state.isOpen}>
            <h2>Settings Menu:</h2>
            <Form onSubmit={this.handleSubmit} >
                <Form.Field inline >
                    <Form.Input placeholder='New Timer'
                        label='Add Timer'
                        type={'number'}
                        min={1}
                        fluid
                        error={this.state.error}
                        name='newTimer'
                        value={this.state.newTimer}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Button type='submit' basic color='green' fluid>Save</Button>
            </Form>
            <br />
            <Button basic
                onClick={e => this.props.resetTimers()}
                color='yellow'
                content='Reset Timers'
                fluid />
        </Menu>
    );
}


function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addTimer, resetTimers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
