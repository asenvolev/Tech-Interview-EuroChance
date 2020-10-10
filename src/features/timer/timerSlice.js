const { createSlice } = require("@reduxjs/toolkit");

const initialState = { seconds: 180 }

const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers:{
        increment(state) {
            state.seconds++
        },
        decrement(state) {
            state.seconds--
        }
    }
})