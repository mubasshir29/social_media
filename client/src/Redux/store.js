import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './authSlice'
import buttonsReducer from './buttonsSlice.js'
import { combineReducers } from 'redux'

export const store = configureStore({
    reducer : combineReducers({
        auth: AuthReducer,
        buttons: buttonsReducer
    })
})

export default store