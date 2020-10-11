import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsNumberIdDisabled, selectNumberById, updateNumberStatus } from './numbersSlice';

export const NumberButton = ({id}) => {
    const number = useSelector(state => selectNumberById(state,id));
    const isDisabled = useSelector(state => selectIsNumberIdDisabled(state,id))
    const dispatch = useDispatch();
    let className = "numberButton";
    if (number.status === "selected") {
        className += " selected"
    }

    const onNumberButtonClick = (e) => {
        const newStatus = number.status === "normal" ? "selected" : "normal"
        dispatch(updateNumberStatus({id, newStatus}))
    }

    return(
        <button
        type="button"
        className={className}
        disabled={isDisabled}
        onClick={onNumberButtonClick}>
            {id}
        </button>
    )
}