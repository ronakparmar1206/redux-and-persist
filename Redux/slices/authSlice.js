import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { userLoginApi } from "../user/action";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: ''
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [userLoginApi.pending]: (state) => {
      state.isLoading = true;
    },
    [userLoginApi.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
      toast.success("Login Successfull",{
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    },
    [userLoginApi.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload
      toast.error("Something went wrong!",{
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    }
  }
});

export default authSlice.reducer

// --export actions---
