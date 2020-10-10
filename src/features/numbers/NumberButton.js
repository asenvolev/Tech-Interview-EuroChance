import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNumberById, selectSelectedNumbers, updateNumberStatus } from './numbersSlice';

export const NumberButton = memo(({id}) => {
    const number = useSelector(state => selectNumberById(state,id));
    const selectedNumbersCount = useSelector(selectSelectedNumbers);
    const dispatch = useDispatch();
    const isDisabled = number.status === "normal" && selectedNumbersCount === 12;
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
})