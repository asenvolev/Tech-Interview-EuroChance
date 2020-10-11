const { createSlice, createEntityAdapter, createSelector } = require("@reduxjs/toolkit");

const numbersAdapter = createEntityAdapter();
const initialState = numbersAdapter.getInitialState()

const numbersSlice = createSlice({
    name: 'numbers',
    initialState,
    reducers: {
        setNumbers(state,action){
            numbersAdapter.upsertMany(state, Array.from({length: 80}, (val, key) => { return {id:key, status:"normal"}}))
        },
        updateNumberStatus(state,action){
            const {id, newStatus} = action.payload;
            const existingNumber = state.entities[id];
            if (existingNumber) {
                existingNumber.status = newStatus;
            }
        }
    },
    extraReducers: {}
})

export const {setNumbers, updateNumberStatus } = numbersSlice.actions;



export const {
    selectAll: selectAllNumbers,
    selectById: selectNumberById,
    selectIds: selectNumberIds,
} = numbersAdapter.getSelectors((state) => state.numbers)

export const selectSelectedNumbers = createSelector(
    [selectAllNumbers],
    (numbers) => numbers.filter(number => number.status === 'selected').length
);

export const selectIsNumberIdDisabled = createSelector(
    [selectSelectedNumbers, selectNumberById],
    (numbersLength, number) => number.status === "normal" && numbersLength === 12
)

export default numbersSlice.reducer;