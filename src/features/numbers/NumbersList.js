import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NumberButton } from './NumberButton';
import { selectNumberIds, setNumbers } from './numbersSlice';

export const NumbersList = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setNumbers());
    })

    const numbers = useSelector(selectNumberIds);

    const content = numbers.map(number =>(
        <NumberButton key={number} id={number} />
    ))
    
    return (
            <div class="numbersList">
                {content}
            </div>
    )

}