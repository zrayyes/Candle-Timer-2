import React from 'react';

export const TimerItem = ({est,minute}) => {

    let calculateDiff = () => {
        let time = est.split(":");
        let minutesGone = (time[0] - 9) * 60 + time[1];
        let seconds = time[2];
        return ((minutesGone%minute)+":"+(60-seconds));
    }

    let minutes,seconds = calculateDiff();

    return (
        <div>
            <li>{minute} | {minutes}:{seconds}</li>
        </div>
)}