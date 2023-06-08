import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosConfig } from "../../../../baseUrl";

const initialState = {
    loading: false,
    isSuccess: false,
    data: [],
    totalCount: "",
    availablePages: [],
    availableData: [],
}
const registeredQrListSlice = createSlice({
    name: "registeredQrListSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // --loading--
        builder.addCase(getRegisteredQrList.pending, (state) => {
            state.loading = true
        })
        // --success--
        builder.addCase(getRegisteredQrList.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.isSuccess = true;
            state.data = payload.res.data;
            state.totalCount = payload.res.count
            // -set page-
            state.availablePages.push(payload.page)
            // -set page with data-
            state.availableData.push({ page: payload.page, data: payload.res.data })
        })
        // --error--
        builder.addCase(getRegisteredQrList.rejected, (state, payload) => {
            state.loading = false;
            state.isSuccess = false;
        })
        //   --
    }
})

export default registeredQrListSlice

export const getRegisteredQrList = createAsyncThunk('post/getRegisteredQrList', async ({ page, searchValue, nagarpalikaId, wardId }) => {
    try {
        const res = await axiosConfig.post(`/qrs/listonlyregisteredqrcodes?skip=${page ? (page - 1) * 5 : 0}&limit=5`, {
            "search": `${searchValue ? searchValue : ""}`,
            "nagarpalikaId": `${nagarpalikaId ? nagarpalikaId : ""}`,
            "wardId": `${wardId ? wardId : ""}`,
        })
        return { res: res.data, page: page }
    }
    catch (err) {
        console.log(err)
    }
})
