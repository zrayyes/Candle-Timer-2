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
                <p className="red">Don't bother</p>                
                <form onSubmit={evt => this.handleSubmit(evt)}>
                    <div className="form-group">
                        <input type="number" 
                        className="form-control" 
                        placeholder="Enter New Timer"
                        onChange={this.handleChange}/>
                    </div>
                    <div className="form-group row">
                        <label className="col-xs-4">Vibrate:</label>
                        <div className="col-xs-8">
                            <div className="form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" checked/> Enabled
                            </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-xs-4">Sound:</label>
                        <div className="col-xs-8">
                            <div className="form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox"/> Enabled
                            </label>
                            </div>
                        </div>
                    </div>
                    
                    <button type="submit" value="" className="btn btn-success">Save</button>
                </form>        
            </div>
        );
    }
}