import React from 'react';

export const TimerItem = ({est,minute}) => {

    let minutes,seconds

    (() => {
        let time = est.split(":");
        let minutesGone = (time[0] - 9) * 60 + time[1];
        let sc = time[2];
        minutes = minutesGone%minute;
        seconds = 60-sc;
    })()


    return (
        <div>
            <li className={(minutes > 0) ?
                 "list-group-item list-group-item-success" : 
                 "list-group-item list-group-item-danger"}>
                {minute} | {minutes}:{seconds}
            </li>
        </div>
    )
}