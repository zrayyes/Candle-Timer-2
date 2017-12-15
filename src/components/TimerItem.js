import React from 'react';

export const TimerItem = ({est,minute}) => {

    let minutes,seconds;

    (() => {
        let time = est.split(":");
        minutes = ((time[0] - 9) * 60 + time[1])%minute;
        seconds = 60-time[2];
    })();

    let vibrate = ()=>{
        navigator.vibrate([300,300,300]);
    }

    return (
        <div>
            <li className={(minutes > 0) ?
                 "list-group-item list-group-item-success" : 
                 "list-group-item list-group-item-danger"}>
                {minute} | {minutes}:{seconds}
                <button onClick={vibrate}>Click</button>
            </li>
        </div>
    )
}

// TODO: Detect final minute
// TODO: Vibrate/Make sound for final minute