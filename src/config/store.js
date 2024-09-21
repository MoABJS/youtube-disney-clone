import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../config/userSlice"
import movieReducer from "../config/movie/movieSlice"

export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
    middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware({
        serializableCheck: false,
    })
})