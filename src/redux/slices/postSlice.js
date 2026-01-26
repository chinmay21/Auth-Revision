import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts:[],
    post:null,
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
        setPost(state, value) {
            state.post = value.payload;
        },
        setSelectedPost(state, value) {
            state.selectedPost = value.payload;
        },
        setLoading(state, value) {
            state.loading = value.payload;
        }
    }
})

export const  { setPosts, setSelectedPost, setLoading, setPost } = postSlice.actions;
export default postSlice.reducer;