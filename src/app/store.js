import {configureStore} from '@reduxjs/toolkit'
import productReducer from '../features/productSilce'

export const store = configureStore({
    reducer:{
        product: productReducer
    }
})