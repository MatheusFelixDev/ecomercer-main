import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: null,
    
};

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async(id=null, { rejectWithValue}) => {
       
            const response = await axios.get("https://ecomercer-main.vercel.app")
            return response?.data;
        
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers:{},
    extraReducers: {
        [productsFetch.pending]: (state, action) => { 
            state.status = "pending";
        },
        [productsFetch.fulfilled]: (state, action) => {
            state.status = "success";
            state.items = action.payload;
        },
        [productsFetch.rejected]: (state, action) =>{
            state.status = "rejected";
            
        },
    }
});

export default productsSlice.reducer;