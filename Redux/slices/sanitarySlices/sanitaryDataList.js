import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosConfig } from '../../../../baseUrl'

let sanitaryData = {
    loading: false,
    isSuccess: false,
    data: [],
    totalCount: "",
    availablePages: [],
    allDataConcat: []
}
const sanitaryDataList = createSlice({
    name: "sanitaryDataList",
    initialState: sanitaryData,
    reducers: {},
    extraReducers: (builder) => {
        // --pending--
        builder.addCase(sanitaryDataListGet.pending, (state) => {
            state.loading = true
        })
        // --fullfilled--
        builder.addCase(sanitaryDataListGet.fulfilled, (state, { payload }) => {
            state.loading = false
            state.isSuccess = true
            // --allDataConcat--
            state.allDataConcat.push({ page: payload.page, data: payload.res.data.data })
            //--availablePages--
            state.availablePages.push(payload.page)
            // --rander data--
            state.totalCount = payload.res.data.count
            state.data = payload.res.data.data
        })
        // --reject--
        builder.addCase(sanitaryDataListGet.rejected, (state, { payload }) => {
            state.loading = false
            state.isSuccess = false

        })


    }
})

export default sanitaryDataList

export const sanitaryDataListGet = createAsyncThunk('post/sanitaryDataList', async ({ page, searchValue, nagarpalikaId, wardId }) => {

    try {
        const res = await axiosConfig.post(`/users/fetchuserrolewise${page ? `?skip=${(page - 1 || 0) * 5}&limit=5` : ""}`, {
            "roleId": "639a28c14a21553d04c092a5",
            "search": `${searchValue ? searchValue : ""}`,
            "nagarpalikaId": `${nagarpalikaId ? nagarpalikaId : ""}`,
            "wardId": `${wardId ? wardId : ""}`,
        })
        return { res, page }
    } catch (err) {
        console.log(err)
    }
})