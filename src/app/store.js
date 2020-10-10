import { configureStore } from '@reduxjs/toolkit';

import numbersReducer from '../features/numbers/numbersSlice';
import betReducer from '../features/bets/betSlice';
import commentsReducer from '../features/comments/commentsSlice'

export default configureStore({
    reducer:{
        numbers: numbersReducer,
        bet: betReducer,
        comments: commentsReducer
    }
})