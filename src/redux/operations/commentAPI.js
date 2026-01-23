import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiConnector } from "../apiConnector";
import { commentEndpoints } from "../apis";

export const createComment = createAsyncThunk(
  "comment/create",
  async ({ content, postId }, thunkAPI) => {
    try {
      const response = await apiConnector(
        "POST",
        commentEndpoints.CREATE_COMMENT_API.replace(":postId", postId),
        { content }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  }
);
