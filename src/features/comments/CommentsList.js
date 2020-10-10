import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCommentsStatus, getComments, selectCommentsIds } from './commentsSlice';
import {Comment} from './Comment';

export const CommentsList = () => {
    const commentsStatus = useSelector(selectCommentsStatus)
    const comments = useSelector(selectCommentsIds);
    const dispatch = useDispatch();

    useEffect(()=>{
        if (commentsStatus === "idle") {
            dispatch(getComments())
        } 
    }, [commentsStatus, dispatch])

    let content;
    if (commentsStatus === "succeeded") {
        content = comments.map(commentId => (
            <Comment key={commentId} commentId={commentId} />
        ))
    }

    return (
        <section>
            {content}
        </section>
    )
}