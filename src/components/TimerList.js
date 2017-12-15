import React from 'react';
import {TimerItem} from "./TimerItem";


export const TimerList = ({utc, minutes}) => {
    const items = minutes.map((minute) => {
        return (
            <TimerItem
                utc={utc}
                minute={minute}
            />
        );
    });

    return (
    <ul>
        {items}
    </ul>)
}