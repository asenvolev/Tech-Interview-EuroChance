import React from 'react';
import { useSelector } from 'react-redux';
import { selectNumberById } from '../numbers/numbersSlice';
import { selectCommentById } from './commentsSlice';

export const Comment = ({commentId})=>{
    const comment = useSelector(state => selectCommentById(state,commentId));
    const correspondingNumber = useSelector(state => selectNumberById(state,commentId));
    const className = `comment ${correspondingNumber.status}`;
    
    return (
        <div className={className}>
            <p>{comment.name}</p>
        </div>
    )
}