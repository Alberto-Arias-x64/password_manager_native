import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = []
const Add_View_Initial_State = false

const PW = createSlice({
    name: 'Password_Manager',
    initialState,
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        },
    },
})
const AV = createSlice({
    name: 'Add_View',
    initialState: Add_View_Initial_State,
    reducers: {
        change: (state) => !state
    },
})

const store = configureStore({
    reducer: {
        Data_Base: PW.reducer,
        Add_View: AV.reducer,
    },
})

export default store
export const { add } = PW.actions
export const { change } = AV.actions