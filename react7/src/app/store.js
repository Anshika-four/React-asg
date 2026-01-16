import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'
import productReducer from '../features/productSlice'
import customerReducer from '../features/customerSlice'
import salesReducer from '../features/salesSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer, 
        customers : customerReducer,
        sales: salesReducer
    }
})