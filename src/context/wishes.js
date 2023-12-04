import { createSlice } from "@reduxjs/toolkit"

export const wishesSlice = createSlice({
    name: "wishes",
    initialState: {
        value: []
    },
    reducers: {
        toggleWishes(state, action){
            let index = state.value.findIndex((el)=> el.id === action.payload.id)
            if(index < 0){
                state.value = [...state.value, action.payload]
            }else{
                state.value = state.value.filter(el => el.id !== action.payload.id)
            }
        }
    }
})

export const { toggleWishes } = wishesSlice.actions
export default wishesSlice.reducer