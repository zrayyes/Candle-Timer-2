import React from 'react';

export const TimerItem = ({est,minute}) => {

    let calculateDiff = () => {
        let time = est.split(":");
        let minutesGone = (time[0] - 9) * 60 + time[1];
        let seconds = time[2];
        return ((minutesGone%minute)+":"+(60-seconds));
    }

    return (
        <div>
            <li>{minute} : {calculateDiff()}</li>
        </div>
)}