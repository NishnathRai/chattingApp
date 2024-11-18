import { createSlice } from "@reduxjs/toolkit";

const leftBarSlice = createSlice({
    name:'leftBar',
    initialState : true ,
    reducers :{
        toggleOpen:(state)=>{
             return !state;
        }  
    }
})
export const { toggleOpen } = leftBarSlice.actions; 
export default leftBarSlice.reducer;