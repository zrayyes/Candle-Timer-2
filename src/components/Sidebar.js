import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { connect } from "react-redux";
import { Button, Form } from 'semantic-ui-react'

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newTimer: '',
            isOpen: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value, isOpen: true })

    handleSubmit = () => {
        const { newTimer } = this.state
        console.log(newTimer)
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
                        name='newTimer'
                        value={this.state.newTimer}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Button type='submit' basic color='green' fluid>Save</Button>
            </Form>
        </Menu>
    );
}


function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(Sidebar);
