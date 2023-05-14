import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './authSlice'

export const store = configureStore({
    reducer : {
        AuthReducer
    }
})

export default store