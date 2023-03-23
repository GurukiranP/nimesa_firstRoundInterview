import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const usersList = createAsyncThunk(
    "https://panorbit.in/api/users.json",
    async () => {
        const reponse = await axios.get(
            "https://panorbit.in/api/users.json"
        );
        return reponse.data;
    }
);

const initialState = {
    loading: "idle",
    error: null,
    data: []
};

export const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
    },
    extraReducers: {
        [usersList.pending]: (state, action) => {
            if (state.loading === "idle") {
                state.loading = "pending";
            }
        },
        [usersList.fulfilled]: (state, action) => {
            if (state.loading === "pending") {
                state.loading = "fulfilled";
                state.data = action.payload;
            }
        },
        [usersList.rejected]: (state, action) => {
            if (state.loading === "pending") {
                state.loading = "error";
                state.error = action.error.message;
            }
        }
    }
});

export const { } = homeSlice.actions;
export default homeSlice.reducer;
export const selectData = (state) => state.home.data;
