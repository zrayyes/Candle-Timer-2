import React from 'react';
import {TimerItem} from "./TimerItem";


export const TimerList = ({est, minutes}) => {
    const items = minutes.map((minute) => {
        return (
            <TimerItem
                est={est}
                minute={minute}
                key={minute}
            />
        );
    });

    return (
    <ul className="list-group">
        {items}
    </ul>)
}