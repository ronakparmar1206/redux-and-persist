import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../../store";


const complaintAssignToDriver = createSlice({
    name: "complaintAssignToDriver",
    initialState: {
        status: STATUSES.IDEL,
    },
    reducers: {},
    extraReducers: (builder) => {

    }

})