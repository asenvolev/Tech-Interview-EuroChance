import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNumberById, selectSelectedNumbers, updateNumberStatus } from './numbersSlice';

export const NumberButton = ({id}) => {
    const number = useSelector(state => selectNumberById(state,id));
    const [status, setStatus] = useState(number.status)
    const selectedNumbersCount = useSelector(selectSelectedNumbers);
    const dispatch = useDispatch();
    const isDisabled = status === "normal" && selectedNumbersCount === 12;
    let className = "col-sm-1 border border-primary rounded-circle mw";
    if (status === "selected") {
        className += " bg-yellow"
    }

    const onNumberButtonClick = (e) => {
        const newStatus = status === "normal" ? "selected" : "normal"
        setStatus(newStatus);
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