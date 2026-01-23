const BASE_URL = import.meta.env.VITE_APP_BASE_URL

export const endpoints = {
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login"
}

export const postEndpoints = {
    FETCH_ALL_POSTS_API: BASE_URL + "/posts/getAllPosts",
    CREATE_POST_API: BASE_URL + "/posts",
    DELETE_POST_API: BASE_URL + "/posts/:id"
}

export const commentEndpoints = {
    CREATE_COMMENT_API: BASE_URL + '/post/:postId/comment',
    DELETE_COMMENT_API: BASE_URL + '/comment/:id'
}