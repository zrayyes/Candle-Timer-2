import React from 'react';
import moment from "moment";

let utc =  moment().utcOffset(-5).format('HH:mm:ss');

export const TimerItem = () => (
    <div>
        <li>{utc}</li>
    </div>
)