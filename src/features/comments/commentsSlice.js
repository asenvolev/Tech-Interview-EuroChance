import { createEntityAdapter, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from '../../api/client';

export const getComments = createAsyncThunk('comments/getComments', async () =>{
    const response = await client.get('comments?postId=1');
    console.log("aideeeee")
    return response;
})

const commentsAdapter = createEntityAdapter({
    sortComparer: (a, b) => b - a
});

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



export default commentsSlice.reducer; 