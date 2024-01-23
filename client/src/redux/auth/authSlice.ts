import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserData } from "../../helpers/interface";
import { server } from "../../helpers/server";
import axios from "axios";
import { toast } from "react-toastify";

export interface AuthState {
    userData: UserData | null;
    isAuthenticated: boolean;
    error: string | null;
    loading: boolean;
}

const initialState: AuthState = {
    userData: null,
    error: null,
    loading: false,
    isAuthenticated: false,
}

export const fetchData = createAsyncThunk(
    "auth/fetchData",
    async () => {
        try {
            const response = await axios.get(`${server}/auth/getauth`, { withCredentials: true });
            return response.data;
        } catch (error: any) {
            throw error.response.data.message;
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.userData = action.payload.result;
            state.error = null;
        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.userData = null;
            state.error = action.error.message || "Failed to fetch data";
        });
    }
})

export default authSlice.reducer;
