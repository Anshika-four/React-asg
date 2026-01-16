import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'
const initialState = {
  sales: JSON.parse(sessionStorage.getItem('sales')) || [],
  totalRevenue: JSON.parse(sessionStorage.getItem('totalRevenue'))||0
}

const salesSlice = createSlice({
  name: 'sales',
  initialState,
  reducers: {
    addSale: {
        reducer: (state, action) => {
            state.sales.push(action.payload)
            state.totalRevenue += action.payload.total
            sessionStorage.setItem('sales', JSON.stringify(state.sales))
            sessionStorage.setItem('totalRevenue', JSON.stringify(state.totalRevenue))
            },
            prepare: ({ customerId, productId, quantity, price }) => ({
                payload: {
                id: nanoid(),
                customerId,
                productId,
                quantity,
                price,
                total: quantity * price,
                date: new Date().toISOString()
                }
            })
    }
  }
})

export const { addSale } = salesSlice.actions
export default salesSlice.reducer
