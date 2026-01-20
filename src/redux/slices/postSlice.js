import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts:[],
    selectedPost: null,
    loading: false,
}

const postSlice = createSlice({
    name:"post",
    initialState: initialState,
    reducers: {
        setPosts(state, value) {
            state.posts = value.payload;
        },
        setSelectedPost(state, value) {
            state.selectedPost = value.payload;
        },
        setLoading(state, value) {
            state.loading = value.payload;
        }
    }
})

export const  { setPosts, setSelectedPost, setLoading } = postSlice.actions;
export default postSlice.reducer;