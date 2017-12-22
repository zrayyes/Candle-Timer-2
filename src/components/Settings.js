import React, { Component } from 'react';
import C from "../constants";
import {connect} from "react-redux";


export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.value);
    }

    render(){
        return (
            <div id="settings">
                <h3>Settings</h3>
                <form onSubmit={evt => this.handleSubmit(evt)}>
                    <div className="form-group">
                        <input type="number" 
                        className="form-control" 
                        placeholder="Enter New Timer"
                        onChange={this.handleChange}/>
                    </div>
                    <button type="submit" value="" className="btn btn-primary">Save</button>
                </form>        
            </div>
        );
    }
}