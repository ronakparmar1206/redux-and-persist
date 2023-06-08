
import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";
import axios from "axios";

import { toast } from "react-toastify";
import { axiosConfig } from "../../../baseUrl";


const initialState = {
    loading: false,
    isSuccess: false,
    data: [],
    add: [],
    addWardStatus: false
}

const getWardList = createSlice({
    name: "getnagarpalika",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // --pending--
        builder.addCase(wardApiCall.pending, (state) => {
            state.loading = true
        })
        // --fullfilled--
        builder.addCase(wardApiCall.fulfilled, (state, { payload }) => {
            state.loading = false
            state.isSuccess = true
            //  --concat array(old & new)--
            let newData = [...state.data, ...payload.data]
            //  --remove equal data--
            // let uniqueArr = newData.filter((obj, index, self) =>
            //   index === self.findIndex((o) => o._id === obj._id)
            //  );
            //  --set data--
            state.data = newData
        })
        // --reject--
        builder.addCase(wardApiCall.rejected, (state, { payload }) => {
            state.loading = false
            state.isSuccess = false
        })
        // --------------------------------Add Nagar Palika---------//

    }
})

// ---call api---
export const wardApiCall = createAsyncThunk("get/wardList", async (id) => {
    console.log(id, "lkhkk")
    const res = await axiosConfig.post("/wards/viewallwardsofnagarpalika", {
        "nagarpalikaId": `${id}`
    })
    return res.data
})


export default getWardList;