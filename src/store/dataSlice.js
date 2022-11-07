import {  createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'data',
    initialState: [],
    reducers: {
        add: (state, action) => action.payload,
        remove: () => []
    }
})

// export default store
const { actions, reducer } = dataSlice
export const { add, remove } = actions
export default reducer