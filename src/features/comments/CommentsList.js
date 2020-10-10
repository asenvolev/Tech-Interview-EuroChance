import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCommentsStatus, getComments, selectCommentsIds } from './commentsSlice';
import {Comment} from './Comment';
import { TimerForm } from './TimerForm';

const COUNTDOWN_SECONDS = 3 * 60;

export const CommentsList = () => {
    const commentsStatus = useSelector(selectCommentsStatus)
    const comments = useSelector(selectCommentsIds);
    const dispatch = useDispatch();
    const [seconds, setSeconds] = useState(COUNTDOWN_SECONDS)

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
        console.log(seconds);
        setSeconds(seconds -1);
    }

    const resetTimer = () => {
        setSeconds(COUNTDOWN_SECONDS);
    }

    let commentsContent;
    if (commentsStatus === "succeeded") {
        commentsContent = comments.map(commentId => (
            <Comment key={commentId} commentId={commentId} />
        ))
    }

    return (
        <section>
            <TimerForm seconds={seconds} />
            {commentsContent}
        </section>
    )
}