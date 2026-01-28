import { createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading, setPost, setPosts } from "../slices/postSlice";
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

export const createPost = createAsyncThunk("post/create", async({title, content}, thunkApi) => {
    try{
        thunkApi.dispatch(setLoading(true));

        const response = await apiConnector("POST", postEndpoints.CREATE_POST_API, {title, content});

        thunkApi.dispatch(setPost(response.data));

        return response.data;
    }
    catch(error) {  
        return thunkApi.rejectWithValue(error.response?.data?.message || "Failed to create post");
    }
    finally{
        thunkApi.dispatch(setLoading(false));
    }
});

export const fetchUserPosts = createAsyncThunk("post/fetchUserPosts", async (_, thunkApi) => {
    try{
        thunkApi.dispatch(setLoading(true));

        const response = await apiConnector("GET", postEndpoints.FETCH_USER_POSTS_API);

        thunkApi.dispatch(setPosts(response.data));

        return response.data;
    }
    catch(error) {
        return thunkApi.rejectWithValue(error.response?.data?.message || "Failed to fetch user posts");
    }
    finally{
        thunkApi.dispatch(setLoading(false));
    }
});