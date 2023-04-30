import { configureStore } from "@reduxjs/toolkit";

import PostReducer from "../../Components/Post/PostSlice";
import MessageReducer from '../../Components/Messaging/messageSlice'

const store = configureStore({
    reducer: {
        post: PostReducer,
        message: MessageReducer
    }
})

export default store