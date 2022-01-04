import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { contactsReducer } from './Contacts/contacts-reducer'

const middleware = (getDefaultMiddleware) => [...getDefaultMiddleware(), logger]

export const store = configureStore({
  reducer: contactsReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
})
