import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosConfig } from "../../../baseUrl"

const initialState = {
    loading: false,
    isSuccess: false,
    data: [],
    totalCount: "",
    availablePages: [],
    allDataConcat: [],
    editTeamData: {},
}
const registrationSlice = createSlice({
    name: "registerworker",
    initialState,
    reducers: {
        setRegisterEditTeamData: (state, action) => {
            state.editTeamData = action.payload
        }
    },
    extraReducers: (builder) => {
        // --pending--
        builder.addCase(registerWorkerApiCall.pending, (state) => {
            state.loading = true
        })
        // --fullfilled--
        builder.addCase(registerWorkerApiCall.fulfilled, (state, { payload }) => {
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
        builder.addCase(registerWorkerApiCall.rejected, (state, { payload }) => {
            state.loading = false
            state.isSuccess = false

        })


    }
})
// ---call api---
export const registerWorkerApiCall = createAsyncThunk("post/registerworker", async ({ page, searchValue, nagarpalikaId }) => {

    // console.log(arg, "updatdata")
    try {

        const res = await axiosConfig.post(`/users/fetchuserrolewise${page ? `?skip=${(page - 1 || 0) * 5}&limit=5` : ""}`, {
            "roleId": "639a28da4a21553d04c092aa",
            "search": `${searchValue ? searchValue : ""}`,
            'nagarpalikaId': `${nagarpalikaId ? nagarpalikaId : ""}`,

        })
        return { res, page }
    } catch (err) {
        console.log(err)
    }
})


export default registrationSlice;


export const setRegisterEditTeamData = registrationSlice.actions.setRegisterEditTeamData