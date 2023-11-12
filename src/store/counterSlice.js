import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increaseCounter: (state, action) => {
            // Immer - Позволяет (изменять) мутировать  состояние
            state.value += 1
        }
    }
})

export const counterReducer = counterSlice.reducer
export const counterActions = counterSlice.actions
// export const { increaseCounter } = counterSlice.actions