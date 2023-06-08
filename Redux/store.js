

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
// ---
import reducer from "../Redux/slices/authSlice"
import getNagarPalikaList from "./slices/getNagarPalikaList";
import qrreducer from "../Redux/slices/qrSlice"
import getWardList from "./slices/generateWardSlice";
import qrupdateSlice from "./slices/qrupdateSlice";
import appBarHeadingSlice from "./slices/appBarHeadingSlice";
import registerUserSlice from "./slices/regiterUserSlice";
import registrationSlice from "./slices/regitrationSlice";
import sanitaryWorkerAdd from "./slices/sanitarySlices/sanitaryWorkerAdd";
import sanitaryDataListGet from "./slices/sanitarySlices/sanitaryDataList";
import registeredQrListSlice from './slices/registeredQrSlices/registeredQrListSlice';
import complaintSlice from "./slices/complaintSlices/complaintSlice";
import persistStore from "redux-persist/es/persistStore";





// --API STATUSES--
export const STATUSES = Object.freeze({
    IDEL: 'idel',
    ERROR: 'error',
    LOADING: 'loading'
})


//----1----
const rootReducer = combineReducers({
    auth: reducer,
    qrcode: qrreducer.reducer,
    getNagarPalikaList: getNagarPalikaList.reducer,
    getWardList: getWardList.reducer,
    qrupdate: qrupdateSlice.reducer,
    title: appBarHeadingSlice.reducer,
    user: registerUserSlice.reducer,
    registrationworker: registrationSlice.reducer,
    sanitaryWorkerAdd: sanitaryWorkerAdd.reducer,
    sanitaryWorkerList: sanitaryDataListGet.reducer,
    registeredQrList: registeredQrListSlice.reducer,
    complaintList: complaintSlice.reducer


})


// ----2----
const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ["qrupdate", "title"]
}

// ----3 ----
const persistedReducer = persistReducer(persistConfig, rootReducer);


// ----4----
const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export default store