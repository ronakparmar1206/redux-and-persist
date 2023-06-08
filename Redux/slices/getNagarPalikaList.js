import { Pending } from "@mui/icons-material";
import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";
import { current } from '@reduxjs/toolkit'
import axios from "axios";
import { createHashRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { axiosConfig } from "../../../baseUrl";
import { useDispatch } from "react-redux";

const initialState = {
    loading: false,
    isSuccess: false,
    allDataConcat: [],
    data: [],
    add: [],
    totalCount: "",
    availablePages: [],
    addNagarStatus: false
}

const getNagarPalikaList = createSlice({
    name: "getnagarpalika",
    initialState,
    reducers: {
        // renderLodedNagarPalika: (state, { payload }) => {
        //     let filterData = current(state).allDataConcat.find((e) => e.page == payload.page)
        //     console.log(filterData)
        //     // current(state).data = filterData?.data
        // }
    },
    extraReducers: (builder) => {
        // --pending--
        builder.addCase(nagarPalikaApiCall.pending, (state) => {
            state.loading = true
        })
        // --fullfilled--
        builder.addCase(nagarPalikaApiCall.fulfilled, (state, { payload }) => {

            state.loading = false
            state.isSuccess = true
            state.totalCount = payload.res.data.count
            // --allDataConcat--
            state.allDataConcat.push({ page: payload.page, data: payload.res.data.data })
            //--availablePages--
            state.availablePages.push(payload.page)
            // --rander data--
            state.data = payload.res.data.data
        })
        // --reject--
        builder.addCase(nagarPalikaApiCall.rejected, (state, { payload }) => {
            state.loading = false
            state.isSuccess = false
        })

        // --pending--
        builder.addCase(addNagarPalikaApiCall.pending, (state) => {

            state.loading = true
            state.addNagarStatus = false

        })
        // --fullfilled--
        builder.addCase(addNagarPalikaApiCall.fulfilled, (state, { payload }) => {
            state.loading = false
            state.isSuccess = true
            state.addNagarStatus = true
            state.add = payload.data
            toast.success("NagarPalika Added", {
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
        builder.addCase(addNagarPalikaApiCall.rejected, (state, { payload }) => {
            state.loading = false
            state.isSuccess = false
            state.addNagarStatus = false
        })
    }
})

// ---call api---
export const nagarPalikaApiCall = createAsyncThunk("get/nagarPalikaList", async ({ page, searchValue }) => {
    console.info(page, searchValue, "pagejakkas")
    const res = await axios.post(`https://wms-final.onrender.com/api/v1/nagarpalika/viewallnagarpalika${page ? `?skip=${(page - 1 || 0) * 10}&limit=10` : ""}`, {
        "search": `${searchValue ? searchValue : ""}`
    })
    return { res, page }
})

// export const updateNagarPalikaListApiCall = createAsyncThunk(
//     "get/updateNagarPalikaList",
//     async () => {
//         const res = await axios.get(
//             "https://wms-final.onrender.com/api/v1/nagarpalika/"
//         );
//         return res.data;
//     }
// );



export const addNagarPalikaApiCall = createAsyncThunk("add/nagarPalika", async (city) => {

    console.log(city, "Ahmedabad")
    const res = await axiosConfig.post("/nagarpalika", {
        nagarpalikaname: `${city}`,
    });
    return res.data;
}
);

export default getNagarPalikaList;
