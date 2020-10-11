import React from 'react';
import { useSelector } from 'react-redux';
import { selectCommentsStatus, getComments, selectCommentsIds } from './commentsSlice';
import {Comment} from './Comment';


export const CommentsList = () => {
    const comments = useSelector(selectCommentsIds);
    const commentsStatus = useSelector(selectCommentsStatus);
    

    let commentsContent;
    if (commentsStatus === "succeeded") {
        commentsContent = comments.map(commentId => (
            <Comment key={commentId} commentId={commentId} />
        ))
    }

    return (
        <section>
            {commentsContent}
        </section>
    )
}