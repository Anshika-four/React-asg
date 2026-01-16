import {createSlice} from '@reduxjs/toolkit'

const initialState={
    products: JSON.parse(sessionStorage.getItem('products')) || []
}
const productSlice = createSlice({
    name:"products",
    initialState,
    reducers: {
        addProduct : (state, action) => {
            state.products.push(action.payload)
            sessionStorage.setItem('products',JSON.stringify(state.products))
        },
        deleteProduct : (state, action) => {
            state.products = state.products.filter((product)=>{
                product.id !== action.payload
            })
            sessionStorage.setItem("products", JSON.stringify(state.products))
        },
        updateProduct: (state, action) => {
            const index = state.products.findIndex((p)=>
            p.id === action.payload.id)
            if(index !== -1){
                state.products[index]=action.payload
                sessionStorage.setItem('products', JSON.stringify(state.products))
            }
        },
        reduceStock : (state, action) => {
            const {productId, quantity} = action.payload
            const product = state.products.find(p=>p.id === productId)
            if(product) {
                product.stock -= quantity
            }
        }
    } 
})
export const {addProduct,deleteProduct, updateProduct, reduceStock} = productSlice.actions

export default productSlice.reducer