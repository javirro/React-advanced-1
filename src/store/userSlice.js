import {  createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        login: (state, action) => action.payload,
        logout: () => null
    }
})

// export default store
const { actions, reducer } = userSlice
export const { login, logout } = actions
export default reducer