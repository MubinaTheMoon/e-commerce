import { configureStore } from '@reduxjs/toolkit'
import wishes from './wishes'
import cart from './cart'

export const store = configureStore({
  reducer: {
    wishes,
    cart
  },
})
