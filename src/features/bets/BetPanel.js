import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { selectSelectedNumbers } from "../numbers/numbersSlice";
import { incrementBetStake, selectBetPriceBySelectedNumbersCount, selectBetStake, selectDrawCount, updateBetStake, updateBetDrawCount } from "./betSlice"
import { InputField } from "./InputField"

export const BetPanel = () => {
    const betStakeInit = useSelector(selectBetStake);
    const betDrawCountInit = useSelector(selectDrawCount);
    const selectedNumbersCount = useSelector(selectSelectedNumbers); 
    const betPriceCount = useSelector(state => selectBetPriceBySelectedNumbersCount(state,selectedNumbersCount))
    console.log(betStakeInit)
    const dispatch = useDispatch();

    const onBetStakeChange = e => {
        const newStake = +e.target.value;
        if (isNaN(newStake)) {
            return
        }
        dispatch(updateBetStake({newStake}))
    }

    const onBetDrawCountChange = e => {
        const newDrawCount = +e.target.value;
        if (isNaN(newDrawCount)) {
            return
        }
        dispatch(updateBetDrawCount({newDrawCount}))
    }

    return (
        <div>
            <InputField objKey="betStake" value={betStakeInit} label={"Bet Stake"} decimalPlaces={2} onValueChange={onBetStakeChange} />
            <InputField objKey="DrawCount" value={betDrawCountInit} label={"Draw Count"} decimalPlaces={0} onValueChange={onBetDrawCountChange} />
            <InputField objKey="betPrice" value={betPriceCount} label={"Bet Price"} decimalPlaces={2} disabled={true} />
        </div>
    )
}