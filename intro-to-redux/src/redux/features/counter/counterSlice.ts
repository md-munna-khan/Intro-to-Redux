import { createSlice } from "@reduxjs/toolkit";
const initialState={
    count:0
}

const CounterSlice =createSlice({
    name:"counter",
    initialState,
    reducers:{

    }
})
export default CounterSlice.reducer