import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title:""

}

const appBarHeadingSlice = createSlice({
  name: "appBar",
  initialState,
 reducers:{
    heading:(state,{payload})=>{
        state.title=payload
    }
 }
});

export const { heading } = appBarHeadingSlice.actions
export default appBarHeadingSlice
