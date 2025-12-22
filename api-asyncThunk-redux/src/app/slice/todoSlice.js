import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


//in createAsyncThunk to parameter (name, callback())
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    return data.slice(0,10); //return first 10 todos
})

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchTodos.rejected, (state, action) =>{
            console.log("Error", action.payload);
            state.isError = true;
        })
    }

})

export default todoSlice.reducer;