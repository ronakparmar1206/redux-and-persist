import { createSlice } from "@reduxjs/toolkit";



const SignUpSlice=createSlice({
    name:"signup",
    initialState:[],
    reducers:{
        getUserDetails(state,action){
state.push(action.payload)
        }  
    }
})


export default SignUpSlice.reducer;

export const getUserDetials_fun = SignUpSlice.actions.getUserDetails
