import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features/Posts/postsSlice'
import singlePostReducer from '../features/Posts/singlePostSlice'
export const store = configureStore({
    reducer: {
        posts: postsReducer,
        singlePost: singlePostReducer
    }
})