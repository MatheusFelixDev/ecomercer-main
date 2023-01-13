import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./api";
import { toast } from "react-toastify";

const initialState = {
    items: [],
    status: null,
    createStatus: null,
    
};

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async() => {
        try{
            const response = await axios.get(
                "https://ecomercer-main.vercel.app"
            );
            return response.data;
        }catch (error){
            console.log(error)
        }
    }
);

export const productsCreate = createAsyncThunk(
    "products/productsCreate",
    async(values) => {
       try {
            const response = await axios.post(
                `${url}/products`, values
            );
            return response.data;
       }catch (error){
        console.log(error);
        toast.error(error.response?.data);
       }
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
            state.items = action.payload;
            state.status = "success";
        },
        [productsFetch.rejected]: (state, action) =>{
            state.status = "rejected";
            
        },

        [productsCreate.pending]: (state, action) => { 
            state.CreateStatus = "pending";
        },
        [productsCreate.fulfilled]: (state, action) => {
            state.items.push(action.payload);
            state.CreateStatus = "success";
        },
        [productsCreate.rejected]: (state, action) =>{
            state.CreateStatus = "rejected";  
        },
    }
});

export default productsSlice.reducer;