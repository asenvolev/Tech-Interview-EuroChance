import React, { useState } from 'react'

export const InputField = ({objKey, value, label, decimalPlaces, onValueChange, disabled, withButtons, step })=> {
    const [tempVal, setTempVal] = useState(value);
    const convertedValue = decimalPlaces ? Number(value).toFixed(decimalPlaces) : value;

    const onInputChanged = e => onValueChange(+e.target.value)

    const onIncreaseButtonClick = () => {
        const newValue = step ? value + step : value + 1;
        onValueChange(newValue)
    }

    const onDecreaseButtonClick = () => {
        const newValue = step ? value - step : value - 1;
        onValueChange(newValue)
    }

    return (
        <div>
            <label for={objKey}>{label}</label>
            <br/>
            {withButtons && <button onClick={onIncreaseButtonClick} >+</button>}
            <input id={objKey} value={convertedValue} onChange={onInputChanged} disabled={disabled} />
            {withButtons && <button onClick={onDecreaseButtonClick} >-</button>}
        </div>
    )
}