import {createSlice} from '@reduxjs/toolkit'

const storedAuth = sessionStorage.getItem('auth')

const initialState = storedAuth ? {
    user: JSON.parse(storedAuth).user,
    token: JSON.parse(storedAuth).token,
    isAuthenticated : true
}: {
    user : null, 
    token : null,
    isAuthenticated: false
}

const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action)=>{
            state.user = action.payload.user
            state.token = action.payload.token
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.user = null
            state.token = null
            state.isAuthenticated = false
        }
    }
})

export const {login, logout} = authSlice.actions
export default authSlice.reducer