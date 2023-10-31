import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../reducers/cart-reducer';
import apiSlice from '../reducers/fakeData';
import toastSlice from "../reducers/toastSlice";
export const store=configureStore({
    reducer:{
        product:productReducer,
        api:apiSlice,
        toast:toastSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;