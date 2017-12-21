import React, { Component } from 'react';
import C from "../constants";
import {connect} from "react-redux";


export default class Settings extends Component {
    render(){
        return (
            <div id="settings">
            <h3>Settings</h3>
                <div class="form-group">
                    <input type="number" className="form-control" placeholder="Enter New Timer"/>
                </div>          
            </div>
        );
    }
}