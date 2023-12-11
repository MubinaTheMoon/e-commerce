import { configureStore } from '@reduxjs/toolkit'
import wishes from './wishes'
import cart from './cartSlice'
import cartSlice from './cartSlice'

export const store = configureStore({
  reducer: {
    wishes,
    cart: cartSlice
  },
})
