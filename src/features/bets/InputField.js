import React from 'react'

export const InputField = ({objKey, value, label, decimalPlaces, onValueChange, disabled, withButtons, step })=> {
    const convertedValue = decimalPlaces ? value.toFixed(decimalPlaces) : value;

    return (
        <div>
            <label for={objKey}>{label}</label>
            <br/>
            <input id={objKey} value={convertedValue} onChange={onValueChange} disabled={disabled} />
        </div>
    )
}