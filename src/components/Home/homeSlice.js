import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const usersList = createAsyncThunk(
    "https://jsonplaceholder.typicode.com/users",
    async () => {
        const reponse = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        return reponse.data;
    }
);


export const usersPosts = createAsyncThunk(
    "https://jsonplaceholder.typicode.com/posts",
    async () => {
        const reponse = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        return reponse.data;
    }
);


const initialState = {
    loading: "idle",
    isLoading: "idle",
    error: null,
    data: [],
    data2: []
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
        },
        [usersPosts.pending]: (state, action) => {
            if (state.isLoading === "idle") {
                state.isLoading = "pending";
            }
        },
        [usersPosts.fulfilled]: (state, action) => {
            if (state.isLoading === "pending") {
                state.isLoading = "fulfilled";
                state.data2 = action.payload;
            }
        },
        [usersPosts.rejected]: (state, action) => {
            if (state.isLoading === "pending") {
                state.isLoading = "error";
                state.error = action.error.message;
            }
        }
    }
});

export const { } = homeSlice.actions;
export default homeSlice.reducer;
export const selectData = (state) => state.home.data;
