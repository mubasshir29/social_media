import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showNewChirp: false,
}

const ButtonsSlice = createSlice({
    name: "newChirp",
    initialState,
    reducers: {
        showChirp : (state,action) => {
            state.showNewChirp =true
        },
        hideChirp : (state,action) => {
            state.showNewChirp =false
        },
    }
})
export const {showChirp,hideChirp} = ButtonsSlice.actions

export default ButtonsSlice.reducer