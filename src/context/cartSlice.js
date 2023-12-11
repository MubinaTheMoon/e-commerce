import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: JSON.parse(localStorage.getItem("cart")) || []
    },
    reducers: {
        incCart(state, action){
            let index = state.value.findIndex((el)=> el.id === action.payload.id)

            if(index < 0){
                // birinchi marta bosilganda
                state.value = [...state.value, {...action.payload, quantity: 1}]
            }else{
                // ikkinchi va undan keyin bosilganda ishlidi
                state.value = state.value.map((item, inx) => {
                    if(index === inx){
                        return {...item, quantity: item.quantity + 1} 
                    }else{
                        return item 
                    }
                })
            }  
            localStorage.setItem("cart", JSON.stringify(state.value))
        },
        decToCart(state, action){
            let index = state.value.findIndex((el)=> el.id === action.payload.id)
            state.value = state.value.map((item, inx) => {
                if(index === inx){
                    return {...item, quantity: item.quantity - 1} 
                }else{
                    return item 
                }
            })
            localStorage.setItem("cart", JSON.stringify(state.value))
        },
        removeCart(state, action){
            state.value = state.value.filter((el)=> el.id !== action.payload.id)  
            localStorage.setItem("cart", JSON.stringify(state.value))
        }

    }
})

export const { incCart, decToCart, removeCart } = cartSlice.actions
export default cartSlice.reducer