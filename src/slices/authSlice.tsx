import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { error } from "console";
import { RootState } from "./store";
import { User, authState } from "../helpers/types";

const authenticate = createAsyncThunk(
    'auth/authenticate',
    async function({email, password}: User){
        const user: User = {email, password, name : "g", }
        if(0 < 5){
            return user
        }else{
            return Promise.reject();
        }
    }
)

const initialState: authState = {
    user: {
        email: "",
        password: "",
        name: ""
    },
    isAuthenticated: false,
    isLoading: false,
    error: ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(){},
        logout(){},
        setIsLoading(){}
    },
    extraReducers: (builder)=>
        builder.addCase(authenticate.pending, (state, action)=>{

        }).addCase(authenticate.fulfilled, (state, action)=>{

        }).addCase(authenticate.rejected, (state, action)=>{

        })
})

export const getUser = (state: RootState) => state.auth.user;
export const getState = (state: RootState) => state.auth;
export const getAuth = (state: RootState) => state.auth.isAuthenticated;
export const {login, logout, setIsLoading} = authSlice.actions;
export default authSlice.reducer;
