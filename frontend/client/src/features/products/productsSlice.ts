import {createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';


interface IProduct{
    id: number;
    image: string;
    price: number;
    description: string;
    rating:{rate:number, count:number}
    title:string;
    category:string
}

interface ProductState{
    productsList:Array<IProduct>;
    loading: boolean;
    error:string|null;
}

const initialState:ProductState ={
    productsList:[],
    loading:false,
    error:null
}

export const fetchProducts = createAsyncThunk(
    'shop',
    async () => {
        const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products');
        return response.data       
    }
)

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        addProduct:(state, action:PayloadAction<IProduct>) =>{
            state.productsList.push(action.payload)
        },
    },
    extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productsList = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
})

export const {addProduct} = productSlice.actions
export default productSlice.reducer

