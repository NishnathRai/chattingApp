import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name :'pageSlice',
    initialState : 0,
    reducers:{
        changePage:(state,actions)=>{
            return actions.payload;
        }
    }
});

export const { changePage } = pageSlice.actions; 
export default pageSlice.reducer;