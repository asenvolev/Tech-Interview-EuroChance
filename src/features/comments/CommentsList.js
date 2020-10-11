import React from 'react';
import { useSelector } from 'react-redux';
import { selectCommentsStatus, selectNotMoreThanTenComments } from './commentsSlice';
import {Comment} from './Comment';


export const CommentsList = () => {
    const comments = useSelector(selectNotMoreThanTenComments);
    const commentsStatus = useSelector(selectCommentsStatus);
    

    let commentsContent;
    if (commentsStatus === "succeeded") {
        commentsContent = [...comments].reverse().map(commentId => (
            <Comment key={commentId} commentId={commentId} />
        ))
    }

    return (
        <div className="commentsList">
            {commentsContent}
        </div>
    )
}