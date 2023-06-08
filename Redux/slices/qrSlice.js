import { createSlice } from "@reduxjs/toolkit";

import { qrCodeGeneration } from "../user/action";
import { toast } from "react-toastify";


const initialState = {
  getValue: {
    type: "",
    npId: "",
    qrCount: "",
    palikaName: ""
  },
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: ''
}

const qrSlice = createSlice({
  name: "qrgeneration",
  initialState,
  reducers: {
    getQrCodeType(state, { payload }) {
      state.getValue.type = payload
    },
    getQrCodeNpId(state, { payload }) {
      state.getValue.npId = payload
    },
    getQrCodeQrCount(state, { payload }) {
      state.getValue.qrCount = payload
    },
    getNagarpalika(state, { payload }) {
      state.getValue.palikaName = payload
    }
  },
  extraReducers: {
    [qrCodeGeneration.pending]: (state) => {
      state.isLoading = true;
    },
    [qrCodeGeneration.fulfilled]: (state, { payload }) => {
      console.log(payload, "qrcode")
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
      toast.success("Qr Generated Successfully", {
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
    [qrCodeGeneration.rejected]: (state, { payload }) => {

      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload
      toast.warn("Something went wrong", {
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
  }
});





export default qrSlice

export const { getQrCodeType, getQrCodeNpId, getQrCodeQrCount, getNagarpalika } = qrSlice.actions
