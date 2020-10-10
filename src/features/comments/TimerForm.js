import React from 'react';

export const TimerForm = ({seconds}) => {
    const minutes = Math.floor(seconds / 60);
    const secondsToNextMinute = seconds % 60;
    const digitalTime = `${minutes.toString().padStart(2, "0")}:${secondsToNextMinute.toString().padStart(2, "0")}`;
    return(
        <div>
            <input value={digitalTime} />
        </div>
    )
}