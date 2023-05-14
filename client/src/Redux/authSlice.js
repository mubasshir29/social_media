import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedStatus: false,
    username: null,
    user_id: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin : (state,action) => {
            state.loggedStatus = true
            state.username = action.payload.user_name
            state.user_id = action.payload.user_id
            //{user_id: user._id, user_name:user.first_name},
        },
        setLogout : (state,action) => {
            state.loggedStatus = false
            state.username = null
            state.email = null
        }
    }
})
export const {setLogin, setLogout} = authSlice.actions

export default authSlice.reducer