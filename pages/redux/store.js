import { combineReducers, configureStore } from "@reduxjs/toolkit"
import SignUpSlice from "./slices.js/SignUpSlice"
import storage from 'redux-persist/lib/storage'
import { persistStore,persistReducer } from "redux-persist";
const persistConfig={
    key:"root",
    version:1,
    storage
}
const reducer=combineReducers({
    signup : SignUpSlice ,
})
const persistRed=persistReducer(persistConfig,reducer)
const store=configureStore({
reducer:persistRed
})
export default store;