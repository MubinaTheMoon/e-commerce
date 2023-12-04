import { configureStore } from '@reduxjs/toolkit'
import wishes from './wishes'

export const store = configureStore({
  reducer: {
    wishes,
  },
})
