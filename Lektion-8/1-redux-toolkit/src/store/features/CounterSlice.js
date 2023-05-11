import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    value: 1
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value += 1
        },
        decrement: (state, action) => {
            state.value -= action.payload
        }
    }
})


export const {increment} = counterSlice.actions

export default counterSlice.reducer