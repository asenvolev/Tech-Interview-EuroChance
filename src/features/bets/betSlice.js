const { createSlice, createSelector } = require("@reduxjs/toolkit");

const initialState = { betStake: 1.00, drawCount:1 }

const betSlice = createSlice({
    name:"bet",
    initialState,
    reducers: {
        updateBetStake(state,action){
            const {newStake} = action.payload;
            state.betStake = newStake;
        },
        updateBetDrawCount(state,action){
            const {newDrawCount} = action.payload;
            state.drawCount = newDrawCount;
        }
    }
});

export const {incrementBetStake, incrementDrawCount, updateBetStake, updateBetDrawCount} = betSlice.actions;

export const selectBetStake = state => state.bet.betStake;

export const selectDrawCount = state => state.bet.drawCount;

export const selectBetPriceBySelectedNumbersCount = createSelector(
    [selectBetStake, selectDrawCount, (state, selectedNumbersCount) => selectedNumbersCount],
    (stake, drawCount, selectedNumbersCount) => +stake * +drawCount * +selectedNumbersCount
);

export default betSlice.reducer;