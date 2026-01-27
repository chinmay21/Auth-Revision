import { createSlice } from "@reduxjs/toolkit";
import { createComment, deleteComment } from "../operations/commentAPI";

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
    },
    extraReducers: (builder) => {
        builder
            .addCase(createComment.fulfilled, (state, action) => {
                const newComment = action.payload.comment;

                const post = state.posts.find(
                    (p) => p._id === newComment.post
                );
                
                if (post) {
                    post.comments.push(newComment);
                }
            })

            .addCase(deleteComment.fulfilled, (state, action) => {
                const { commentId, postId } = action.payload;

                const post = state.posts.find(
                    (p) => p._id === postId
                );

                if(post) {
                    post.comments = post.comments.filter(
                        (c) => c._id !== commentId
                    );
                }

                if(state.selectedPost?._id === postId) {
                    state.selectedPost.comments = state.selectedPost.comment.filter(c => c._id !== commentId);
                }
            });
    }
});

export const  { setPosts, setSelectedPost, setLoading, setPost } = postSlice.actions;
export default postSlice.reducer;