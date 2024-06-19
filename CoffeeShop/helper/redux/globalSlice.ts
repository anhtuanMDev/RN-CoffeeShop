import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { set } from "mongoose";

export interface GlobalState {
    login: boolean;
    userID: string;
    host: string;
    name: string;
    image: string;
}

export interface ResponseAPI {
    status: string;
    message: string;
    data: any;
}

const initialState: GlobalState = {
    login: false,
    userID: "",
    host: "http://",
    name: "",
    image: "",
};

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        isLogin: (state, action: PayloadAction<boolean>) => {
            state.login = action.payload;
        },
        setUserID: (state, action: PayloadAction<string>) => {
            state.userID = action.payload;
        },
        setHost: (state, action: PayloadAction<string>) => {
            state.host = action.payload;
        },
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setImage: (state, action: PayloadAction<string>) => {
            state.image = action.payload;
        }
    },
});

export const { isLogin, setUserID, setHost, setName, setImage } = globalSlice.actions;
export const selectIsLogin = (state: { global: GlobalState }) => state.global.login;
export const selectName = (state: { global: GlobalState }) => state.global.name;
export const selectUserID = (state: { global: GlobalState }) => state.global.userID;
export const selectHost = (state: { global: GlobalState }) => state.global.host;
export const selectImage = (state: { global: GlobalState }) => state.global.image;

export default globalSlice.reducer;