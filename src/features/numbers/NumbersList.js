import React from 'react';
import { useSelector } from 'react-redux';
import { NumberButton } from './NumberButton';
import { selectNumberIds } from './numbersSlice';

export const NumbersList = () => {

    const numbers = useSelector(selectNumberIds);

    const content = numbers.map(number =>(
            <NumberButton key={number} id={number} />
    ))
    
    return (
            <div class="numbersList">
                <div >
                    {content}
                </div>
            </div>
    )

}