import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = []

const PW = createSlice({
    name: 'Password_Manager',
    initialState,
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        },
    },
})

const store = configureStore({
    reducer: {
        Data_Base: PW.reducer,
    },
})

export default store
export const { add } = PW.actions