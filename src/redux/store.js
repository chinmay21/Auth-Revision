import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../redux/slices/authSlice'
import postReducer from '../redux/slices/postSlice'
import commentReducer from '../redux/slices/commentSlice'

const store = configureStore({
    reducer:{
        auth: authReducer,
        post: postReducer,
        comment: commentReducer
    }
})

export default store