import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosConfig } from "../../../../baseUrl";
import { toast } from "react-toastify";

const sanitaryWorkerAdd = createSlice({
    name: "sanitaryWorkerAdd",
    initialState: {
        loading: false,
        isSuccess: false,
        message: ""
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(sanitaryAddApi.pending, (state) => {
            state.loading = true
            state.isSuccess = false
        }),
            builder.addCase(sanitaryAddApi.fulfilled, (state, { payload }) => {
                state.loading = false
                state.isSuccess = true
                state.message = payload.message
                toast.success(payload.message, {
                    position: "bottom-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            }),
            builder.addCase(sanitaryAddApi.rejected, (err) => {
                console.log(err)
            })
    }
})

export default sanitaryWorkerAdd

// ---api call---
export const sanitaryAddApi = createAsyncThunk("post/addSanitartWorker", async ({ values }) => {
    setloader(true)
    try {
        const res = await axiosConfig.post("/users/signup", {
            "name": `${values.Name}`,
            "username": `${values.Username}`,
            "nagarpalikaId": `${values.nagarPalika}`,
            "password": `${values.Password}`,
            "mobile_no": `${values.PhoneNumber}`,
            "wardId": `${values.WardNumber}`,
            "adharno": `${values.AadharCardNumber}`,
            "drivinglicenseno": `${values.DrivingLicenseNumber}`,
            "designation": `${values.Designation}`,
            "roleId": "639a28c14a21553d04c092a5"
        })
        return res.data
    } catch (error) {
        console.log(error)
        return error
    }
})