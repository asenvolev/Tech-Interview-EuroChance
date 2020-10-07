import { configureStore } from '@reduxjs/toolkit'

import numbersReducer from '../features/numbers/numbersSlice'

export default configureStore({
    reducer:{
        numbers: numbersReducer
    }
})