import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../config/userSlice"

export default configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware({
        serializableCheck: false,
    })
})