import { configureStore } from '@reduxjs/toolkit'
import cardSlice from './services/cardSlice'

export const store = configureStore({
  reducer: {
    card: cardSlice
  },
})