import { configureStore } from "@reduxjs/toolkit"
import SignUpSlice from "./slices.js/SignUpSlice"

const store=configureStore({
reducer:{
    signup : SignUpSlice ,
}
})
export default store;