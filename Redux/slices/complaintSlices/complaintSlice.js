import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosConfig } from "../../../../baseUrl";

const initialState = {
  loading: false,
  isSuccess: false,
  data: [],
  totalCount: "",
  availablePages: [],
  availableData: [],
};
const complaintSlice = createSlice({
  name: "complaintListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // --loading--
    builder.addCase(complaintList.pending, (state) => {
      state.loading = true;
    });
    // --success--
    builder.addCase(complaintList.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.isSuccess = true;
      state.data = payload.res.data;
      state.totalCount = payload.res.count;
      // -set page-
      state.availablePages.push(payload.page);
      // -set page with data-
      state.availableData.push({ page: payload.page, data: payload.res.data });
    });
    // --error--
    builder.addCase(complaintList.rejected, (state, payload) => {
      state.loading = false;
      state.isSuccess = false;
    });
    //   --
  },
});

export default complaintSlice;

export const complaintList = createAsyncThunk(
  "post/complainList",
  async ({ page, searchValue, nagarpalikaId, wardId }) => {
    try {
      const res = await axiosConfig.post(
        `/complain/viewallcomplaint?skip=${page ? (page - 1) * 1 : 0}&limit=10`,
        {
          search: `${searchValue ? searchValue : ""}`,
          nagarpalikaId: `${nagarpalikaId ? nagarpalikaId : ""}`,
          wardId: `${wardId ? wardId : ""}`,
        }
      );
      return { res: res.data, page: page };
    } catch (err) {
      console.log(err);
    }
  }
);
