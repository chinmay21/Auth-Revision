import { createSlice } from "@reduxjs/toolkit";
import { createComment } from "../operations/commentAPI";

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    comments: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.loading = false;
        state.comments.push(action.payload.comment);
      })
      .addCase(createComment.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default commentSlice.reducer;
