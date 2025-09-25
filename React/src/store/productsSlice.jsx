import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("/products/getProducts",async(_,thunkApi) => {
    try {
        const data = await fetch("http://localhost:5080/products");
        const products = await data.json();
        return products;
    }catch(error) {
       return thunkApi.rejectWithValue(error);
    }
});

export const getProductById = createAsyncThunk("/products/getProductById",async(id,thunkApi) => {
    try {
        const data = await fetch(`http://localhost:5080/products/${id}`);
        const result = await data.json();
        return result;
    }catch(error) {
        return thunkApi.rejectWithValue(error.message);
    }
})
const productsSlice = createSlice({
    name : "products",
    initialState: {products : [],isLoading: false, error : "", searchTerm : "",filter : "All",selectedProduct : {}},
    reducers : {
        filterItems : (state,action) => {
            state.filter = action.payload;

        },
        searchProduct : (state,action) => {
            state.searchTerm = action.payload;
        },
        showDetails : (state,action) => {
            state.selectedProduct =  state.products.find(product => product.id === action.payload);

        }
    },
    extraReducers : (builder) => {
        builder
            .addCase(getProducts.fulfilled,(state,action) => {
                state.products = action.payload;
                state.isLoading = false;
            })
            .addCase(getProducts.rejected,(state,action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(getProducts.pending,(state,action) => {
                state.isLoading = true;

            })
            .addCase(getProductById.fulfilled,(state,action) => {
                state.selectedProduct = action.payload;
            })

    }
})


export default productsSlice.reducer;
export const {filterItems,searchProduct,showDetails} = productsSlice.actions;