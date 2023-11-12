import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// dispatch(fetchTodos())
export const fetchTodos = createAsyncThunk(
    "todos/fetchTodos",
    async () => {
        const response = await axios.get("https://dummyjson.com/todos?limit=15")
        return response.data
    }
)


export const fetchTodosLong = createAsyncThunk(
    "todos/fetchTodos",
    async () => {
        const response = await fetch("https://dummyjson.com/todos?limit=15")
        if (!response.ok) {
            throw new Error("Could not fetch todos")
        }
        return response.json()
    }
)

// dispatch(asyncCreateTodo("Learn JavaScript"))
export const asyncCreateTodo = createAsyncThunk(
    "todos/asyncCreateTodo",
    async (todo) => {
        const response = await axios.post("https://dummyjson.com/todos/add", 
            {
                userId: 1,
                todo,
                completed: false
            }
        )
        return response.data
    }
)

const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    reducers: [],
    extraReducers: builder => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.error = null
            state.loading = true
        })
        .addCase(fetchTodos.fulfilled, (state, action) => {
            state.error = null
            state.loading = false
            state.items = action.payload.todos
        })
        .addCase(fetchTodos.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export const todosReducer = todosSlice.reducer
