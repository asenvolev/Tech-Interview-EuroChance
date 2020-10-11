import { createEntityAdapter, createAsyncThunk, createSlice, createSelector } from "@reduxjs/toolkit";
import { client } from '../../api/client';

export const getComments = createAsyncThunk('comments/getComments', async () =>{
    const response = await client.get('comments?postId=1');
    return response;
})

const commentsAdapter = createEntityAdapter();

const initialState = commentsAdapter.getInitialState({
    status: 'idle',
    error: null
});

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: {
        [getComments.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getComments.fulfilled]: (state, action) => {
          state.status = 'succeeded'
          commentsAdapter.setAll(state, action.payload);
        },
        [getComments.rejected]: (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        },
    }
});

export const selectCommentsStatus = state => state.comments.status;

export const {
    selectAll: selectAllComments,
    selectById: selectCommentById,
    selectIds: selectCommentsIds
} = commentsAdapter.getSelectors((state) => state.comments)

export const selectNotMoreThanTenComments = createSelector(
    [selectCommentsIds],
    (comments) => comments.length > 10 ? comments.slice(0,10) : comments
)

export default commentsSlice.reducer; 