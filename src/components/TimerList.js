import React, { Component } from 'react';
import { connect } from "react-redux";
import DragSortableList from 'react-drag-sortable';

// import C from "../constants";

import TimerItem from "./TimerItem";

class TimerList extends Component {
    render() {
        return (
            <ul className="list-group">
                <DragSortableList items={this.props.minutes.map((minute) => {
                    return ({
                        content: (<TimerItem
                            minute={minute}
                            key={minute} />)
                    });
                })} type="grid" />
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        minutes: state.timers
    };
}

export default connect(mapStateToProps)(TimerList);