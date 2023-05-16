import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService";


const initialState = {
    products: [],
    error: null,
    loading: false
}

export const addProduct = createAsyncThunk('product-list/add' , async (productData, thunkAPI) => {
    try {
        return await productService.createProduct(productData)
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
})

export const getProduct = createAsyncThunk('product-list/getAll' , async (_, thunkAPI) => {
    try {
        return await productService.getAllAsync('products')
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
})

export const productListSlice = createSlice({
    name: 'product-list',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addProduct.pending, (state) => {
                state.loading = true
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.products = [...state.products, action.payload]
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                
            })


            .addCase(getProduct.pending, (state) => {
                state.loading = true
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.products = action.payload
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                
            })
    }
})

export default productListSlice.reducer