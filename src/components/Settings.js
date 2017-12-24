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
        console.log(event.target.value);
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
                    <div className="form-group">
                    <label for="vibrate">Vibrate durations:</label>
                        <input type="range" 
                        min="0"
                        max="1000" 
                        className="slider" 
                        id="vibrate" 
                        onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="volume">Volume:</label>
                        <input type="range" 
                        min="0"
                        max="100" 
                        className="slider" 
                        id="volume" 
                        onChange={this.handleChange}/>
                    </div>
                    
                    <button type="submit" value="" className="btn btn-primary">Save</button>
                </form>        
            </div>
        );
    }
}