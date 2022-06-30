import {createSlice,createAsyncThunk,createEntityAdapter} from '@reduxjs/toolkit'
import axios from 'axios'

export const getPoducts = createAsyncThunk("product/getProducts",async()=>{
    const response = await axios.get('http://localhost:5000/products');
    return response.data;
})

export const addProduct = createAsyncThunk("product/addProduct",async({title,price})=>{
    const response = await axios.post('http://localhost:5000/products',{title,price});
    return response.data;
})

export const updateProduct = createAsyncThunk("product/addProduct",async({id,title,price})=>{
    const response = await axios.patch(`http://localhost:5000/products/${id}`,{title,price});
    return response.data;
})

export const delateProduct = createAsyncThunk("product/deleteProducts",async(id)=>{
    await axios.delete(`http://localhost:5000/products/${id}`);
    return id;
})


const productEntity = createEntityAdapter({
    selectId: (product) =>product.id
})


const productSlice = createSlice({
    name:"product",
    initialState:productEntity.getInitialState(),
    extraReducers:{
        [getPoducts.fulfilled]: (state,action)=>{
            productEntity.setAll(state,action.payload)
        },
        [addProduct.fulfilled]: (state,action)=>{
            productEntity.addOne(state,action.payload)
        },
        [delateProduct.fulfilled]: (state,action)=>{
            productEntity.removeOne(state,action.payload)
        },
        [updateProduct.fulfilled]: (state,action)=>{
            productEntity.updateOne(state,{id:action.payload.id,updates:action.payload})
        }
    }
})


export const productSelector = productEntity.getSelectors(state => state.product)
export default productSlice.reducer;