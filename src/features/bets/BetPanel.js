import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { selectSelectedNumbers } from "../numbers/numbersSlice";
import { incrementBetStake, selectBetPriceBySelectedNumbersCount, selectBetStake, selectDrawCount, updateBetStake, updateBetDrawCount } from "./betSlice"
import { InputField } from "./InputField"

export const BetPanel = () => {
    const betStakeInit = useSelector(selectBetStake);
    const betDrawCountInit = useSelector(selectDrawCount);
    const selectedNumbersCount = useSelector(selectSelectedNumbers); 
    const betPriceCount = useSelector(state => selectBetPriceBySelectedNumbersCount(state,selectedNumbersCount));
    const dispatch = useDispatch();

    const onBetStakeChange = (newStake) => {
        if (isNaN(newStake)) {
            return
        }
        dispatch(updateBetStake({newStake}))
    }

    const onBetDrawCountChange = (newDrawCount) => {
        if (isNaN(newDrawCount)) {
            return
        }
        dispatch(updateBetDrawCount({newDrawCount}))
    }

    return (
        <div className="betPanel">
            <InputField objKey="betStake" value={betStakeInit} label={"Bet Stake"} decimalPlaces={2} onValueChange={onBetStakeChange} withButtons={true} step={0.2}/>
            <InputField objKey="DrawCount" value={betDrawCountInit} label={"Draw Count"} decimalPlaces={0} onValueChange={onBetDrawCountChange} withButtons={true} />
            <InputField objKey="betPrice" value={betPriceCount} label={"Bet Price"} decimalPlaces={2} disabled={true} />
        </div>
    )
}