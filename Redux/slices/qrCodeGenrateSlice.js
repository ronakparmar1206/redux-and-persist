import { createSlice } from "@reduxjs/toolkit";


const qrCodeGenrateSlice = createSlice({
    name:"qrCodeGenrateSlice",
    initialState : {
        type:"",
        npId :"",
        qrCount :"",
        palikaName:""
    },
    reducers:{
           getQrCodeType(state , {payload}){
             state.type = payload
            },
            getQrCodeNpId(state , {payload}){
                state.npId = payload
               },
            getQrCodeQrCount(state , {payload}){
                state.qrCount = payload
               },
               getNagarPalikaName(state,{payload}){
state.palikaName=payload
               }
        }
        
    })
    

export default qrCodeGenrateSlice

export const {getQrCodeType } = qrCodeGenrateSlice.actions