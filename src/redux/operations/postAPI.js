import { createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading, setPosts } from "../slices/postSlice";
import { apiConnector } from "../apiConnector";
import { postEndpoints } from "../apis";

export const fetchAllPosts = createAsyncThunk('post/fetchAllPosts', async (_, thunkApi) => {
    try{
        thunkApi.dispatch(setLoading(true));

        const response = await apiConnector("GET", postEndpoints.FETCH_ALL_POSTS_API);

        thunkApi.dispatch(setPosts(response.data.posts));

        console.log(response.data);

        return response.data;
    }
    catch(error) {
        return thunkApi.rejectWithValue(error.response?.data?.message);
    }
    finally {
        thunkApi.dispatch(setLoading(false));
    }
});