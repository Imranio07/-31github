import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            name: "",
            email: "",
            tel: ""
        }
    },
    reducers: {
        // dispatch(changeName("name"))
        changeName: (state, action) => {
            console.log(action)
            state.user.name = action.payload
        }
    }
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions