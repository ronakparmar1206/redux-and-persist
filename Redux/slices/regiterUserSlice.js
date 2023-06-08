import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify"

const initialState = {
    loading: false,
    isSuccess: false,
    data: []
}
const registerUserSlice = createSlice({
    name: "registeruser",
    initialState,
    extraReducers: (builder) => {
        // --pending--
        builder.addCase(registerUserApiCall.pending, (state) => {
            state.loading = true
        })
        // --fullfilled--
        builder.addCase(registerUserApiCall.fulfilled, (state, { payload }) => {
            state.loading = false
            state.isSuccess = true
            state.data = payload
            // console.log(payload.data ,"payload.datapayload.data")

            toast.success("User Added Successfully", {
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
        // --reject--
        builder.addCase(registerUserApiCall.rejected, (state, { payload }) => {
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
export const registerUserApiCall = createAsyncThunk("post/registerUser", async (arg) => {
    console.log(arg, "updatdata")
    try {

        const res = await axios.post("https://wms-final.onrender.com/api/v1/users/signup", {
            "name": `${arg.Name}`,
            "username": `${arg.Username}`,
            "password": `${arg.Password}`,
            "mobile_no": `${arg.PhoneNumber}`,
            // "Address": "surat",
            "adharno": `${arg.AadharCardNumber}`,
            "drivinglicenseno": `${arg.DrivingLicenseNumber}`,
            "nagarpalikaId": `${arg.NagarPalikaName}`,
            // "gender": "Male",
            // "DOB": "1999-10-07",
            "roleId": "639a28da4a21553d04c092aa"
        })
        return res.data
    } catch (err) {
        console.log(err)
    }
})
export default registerUserSlice;