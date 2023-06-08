import { Pending } from "@mui/icons-material";
import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";
import axios from "axios";
import { createHashRouter } from "react-router-dom";
import { toast } from "react-toastify";


const initialState = {
    loading: false,
    isSuccess: false,
    data: [],
  qrdata:[],
  page:""
}

const qrupdateSlice = createSlice({
    name: "setqrcodeData",
    initialState,
    reducers: {
        setQrCodeData(state , {payload}){
            state.qrdata = [payload]
           },
           setPageData(state,{payload}){
            state.page=payload
           }
    },
    extraReducers: (builder) => {
        // --pending--
        builder.addCase(qrUpdateApiCall.pending, (state) => {
            state.loading = true
        })
        // --fullfilled--
        builder.addCase(qrUpdateApiCall.fulfilled, (state, { payload }) => {
           
            state.isSuccess = true
            state.data = payload.data
            console.log(payload.data, "payload.datapayload.data")
            state.qrdata = payload.data
            toast.success("Data Updated Successfully", {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            state.loading = false
        })
        // --reject--
        builder.addCase(qrUpdateApiCall.rejected, (state, { payload }) => {
            state.loading = false
            state.isSuccess = false
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
        })
        // --------------------------------Add Nagar Palika---------//

    }
})

// ---call api---
export const qrUpdateApiCall = createAsyncThunk("post/qrUpdate", async (arg, value) => {
    console.log(arg, "update")
    const res = await axios.post("https://wms-final.onrender.com/api/v1/qrs/updateqrhousedetails", {
        "qrId": `${arg.qrData._id
            }`,
        // "houseno":"31",
        "houseaddress": `${arg.values.Address}`,
        // "city":"surat",
        // "zipcode":"395009",
        "username": `${arg.values.Registered_Username}`,
        "mobile_no": `${arg.values.PhoneNumber}`,
        "lat": `${arg.values.Latitude}`,
        "long": `${arg.values.Longitude}`,
        "nagarpalikaId": `${arg.qrData.nagarpalikaId}`,
        "wardId": `${arg.qrData.wardId
            }`,
        "registrationmemberId": `${arg.qrData.registrationmemberId
            }`
    })
    console.log(res,"everbody")
    return res.data
})




export default qrupdateSlice;
export const { setQrCodeData,setPageData } = qrupdateSlice.actions