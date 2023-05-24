import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './authSlice'
import buttonsReducer from './ButtonsSlice'

export const store = configureStore({
    reducer : {
        AuthReducer,
        buttonsReducer
    }
})

export default store