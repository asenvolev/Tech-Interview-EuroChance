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
        <section>
            <div class="d-flex justify-content-center">
                <div class="col-sm-5 d-flex align-content-center flex-wrap">
                    {content}
                </div>
            </div>
            
        </section>
    )

}