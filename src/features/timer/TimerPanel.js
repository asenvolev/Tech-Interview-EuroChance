import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCommentsStatus, getComments } from '../comments/commentsSlice';
import { TimerForm } from './TimerForm';

const COUNTDOWN_SECONDS = 3*60;

export const TimerPanel = () =>{
    const commentsStatus = useSelector(selectCommentsStatus);
    const dispatch = useDispatch();
    const [seconds, setSeconds] = useState(COUNTDOWN_SECONDS);

    useEffect(()=>{
        if (commentsStatus === "idle") {
            dispatch(getComments());
        } 
        else if (commentsStatus === "succeeded"){
            if (seconds) {
                setTimeout(tick,1000)
            }
            else{
                resetTimer();
                dispatch(getComments());
            }
        }
    }, [seconds,commentsStatus, dispatch])

    const tick = () => {
        setSeconds(seconds -1);
    }

    const resetTimer = () => {
        setSeconds(COUNTDOWN_SECONDS);
    }

    return(
        <div className="timerPanel">
            <TimerForm seconds={seconds} />
        </div>
    )
}