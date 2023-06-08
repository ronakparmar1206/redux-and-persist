import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


export const registerTeamApi = createAsyncThunk("post/registerTeam",async(arg)=>{
        const res =await axios.post("https://wms-final.onrender.com/api/v1/users/signup",{
            Name: `${arg.name}`,
            userName:`${arg.Username}`,
            password: `${arg.Password}`,
            mobile_no: `${arg.PhoneNumber}`,
            Address: `surat`,
            adharcard: `${arg.AadharCardNumber}`,
            licenseno:`${arg.DrivingLicenseNumber}`,
            gender: "Male",
            DOB: "1999-10-07",
            roleId:"639a281c72508129809a4351"
        })
       return res.data
    }
)

const registerTeam = createSlice({
    name:"registerTeam",
    initialState:{
        data: [],
        isLoading: false,
        isSuccess: false,
        errorMessage: ''
    },
    reducers:{},
    extraReducers:{
        [registerTeamApi.pending]:(state,{payload})=>{
            state.isLoading=true
        },
        [registerTeamApi.fulfilled]:(state,{payload})=>{
            state.isLoading=false,
            state.isSuccess=true,
            state.data = payload;
            toast.success("User created succesfully",{
                position:"bottom-right",
                autoClose:1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        },
        [registerTeamApi.rejected]:(state,{payload})=>{
            state.isLoading=false,
            state.isSuccess=false,
            toast.error("User Not created",{
                position:"bottom-right",
                autoClose:1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                
            })
        }
    }
})

export default registerTeam