import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showNewChirp: false,
    editModal : false
}

const buttonsSlice = createSlice({
    name: "buttons",
    initialState,
    reducers: {
        showChirp : (state) => {
            state.showNewChirp = true
        },
        hideChirp : (state) => {
            state.showNewChirp = false
        },
        showEditModal : (state) => {
            state.editModal = true
            console.log("From showEditModal")
        },
        hideEditModal: (state) => {
            state.editModal = false
            console.log("From showEditModal")
        }
    }
})
export const {showChirp,hideChirp,showEditModal,hideEditModal} = buttonsSlice.actions

export default buttonsSlice.reducer