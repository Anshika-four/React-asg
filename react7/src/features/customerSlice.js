import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    customers: JSON.parse(sessionStorage.getItem('customers')) || []
}

const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers : {
        addCustomer: (state, action) => {
            state.customers.push(action.payload)
            sessionStorage.setItem('customers', JSON.stringify(state.customers))
        },
        deleteCustomer : (state, action) => {
            state.customers = state.customers.filter(
                (customer) => customer.id !==action.payload
            )
            sessionStorage.setItem('customers', JSON.stringify(state.customers))
        }
    }
})
export const { addCustomer, deleteCustomer } = customerSlice.actions
export default customerSlice.reducer
