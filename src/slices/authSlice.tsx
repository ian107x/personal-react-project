import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { User, authState } from "../helpers/types";

export const authenticate = createAsyncThunk(
    'auth/authenticate',
    async function({email, password}: User){
        const user: User = {email, password, name : "g", }
        if(0 < 5){
            console.warn(user);
            return user
        }else{
            return Promise.reject();
        }
    }
)

const initialState: authState = {
    user: {
        email: "",
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
        login(state, action: PayloadAction<authState>){
            state.user = action.payload.user;
            state.isAuthenticated = true;
            state.isLoading = false;
        },
        logout(state){
            state = initialState;
        },
        setIsLoading(state){
            state.isLoading = true
        },
        setError(state){
            state.error = "error logging in"
        }
    },
    extraReducers: (builder)=>
        builder.addCase(authenticate.pending, (state, action)=>{
            state.isLoading = true

        }).addCase(authenticate.fulfilled, (state, action)=>{
            state.user.email = action.payload.email
            state.user.name = action.payload.name
            state.isAuthenticated = true
            state.isLoading = false

        }).addCase(authenticate.rejected, (state, action)=>{

            state.isAuthenticated = false
            state.isLoading = false
            state.error = "Error logging into your account. Please try again"

        })
})

export const getUser = (state: RootState) => state.auth.user;
export const getState = (state: RootState) => state.auth;
export const getAuth = (state: RootState) => state.auth.isAuthenticated;
export const {login, logout, setIsLoading} = authSlice.actions;
export default authSlice.reducer;
