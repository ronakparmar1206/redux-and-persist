
import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAdmin } from "../../utils/fetchAdmin";



export const userLoginApi = createAsyncThunk('userLoginApi', async (arg, { rejectWithValue }) => {
  console.log(arg, "manishhh")
  try {
    const { data } = await axios.post(' https://wms-final.onrender.com/api/v1/users/adminlogin', {

      "email": `${arg.username}`,
      "password": `${arg.password}`

    });

    setAdmin(data.data)

    return data;
  } catch (error) {
    console.log(error);

    return rejectWithValue(error.message);
  }
})

// --- - - - -  - - - - - -  - - - - - - Qr Code Generation Api - - - - -  - - -- - - - - - - //

export const qrCodeGeneration = createAsyncThunk('post/generateqrcodes', async (arg, { rejectWithValue }) => {
  console.log(arg, "post/generateqrcodespost/generateqrcodespost/generateqrcodes")
  try {
    const { data } = await axios.post('https://wms-final.onrender.com/api/v1/qrs/generateqrcodes', {
      "qrcount": `${arg.quantity}`,
      "housetype": `${arg.qrCode_Generation_Values.type}`,
      "nagarpalikaId": `${arg.qrCode_Generation_Values.npId}`
    });
    console.log(data, "post/generateqrcodespost/generateqrcodespost/generateqrcodes")

    console.log(data, "data")
    return data;
  } catch (error) {
    console.log(error);

    return rejectWithValue(error.message);
  }
})

// ---------------------------------------List Qr Code Generation-------------------------------//
export const listQrCode = createAsyncThunk('get/listqrcodebynagarpalika', async ({ page, searchValue, nagarpalikaId }) => {
  console.log(searchValue,"ll")
  await axiosConfig.post(`/qrs/listonlyregisteredqrcodes?skip=0&limit=3`, {
    "search": `${searchValue ? searchValue : ""}`,
    // 'nagarpalikaId': `${nagarpalikaId ? nagarpalikaId : ""}`,
  }).then((res) => {
    return { res, page }
  }).catch((err) => {
    console.log(err)
  })
})


// --------Delete Qr Codes---------

export const deleteQrCode = createAsyncThunk('del/deleteqrcode', async (arg) => {
  console.log(typeof arg, "delete", arg)

  await axios.delete('https://wms-final.onrender.com/api/v1/qrs/deletemultipleqrcodes', {
    data: {
      "qrid": [arg]

    }
  }).then((res) => {
    console.log(res, "deleted successfully")
    return res.data
  }).catch((err) => {
    console.log(err, "err")
  })
})