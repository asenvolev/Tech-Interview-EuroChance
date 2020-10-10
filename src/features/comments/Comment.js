import React from 'react';
import { useSelector } from 'react-redux';
import { selectCommentById } from './commentsSlice';

export const Comment = ({commentId})=>{
    const comment = useSelector(state => selectCommentById(state,commentId));
    
    return (
        <div>
            <p>{comment.name}</p>
        </div>
    )
}