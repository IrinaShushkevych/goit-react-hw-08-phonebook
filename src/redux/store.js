import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import logger from 'redux-logger'
import { contactsReducer } from './Contacts/contacts-reducer'
import { filterReducer } from './Filter/filter-reducer'
import { usersSlice } from './Users/users-slice'

const middleware = (getDefaultMiddleware) => [
  ...getDefaultMiddleware(),
  contactsReducer.middleware,
  logger,
]

export const store = configureStore({
  reducer: {
    [contactsReducer.reducerPath]: contactsReducer.reducer,
    [usersSlice.name]: usersSlice.reducer,
    filter: filterReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
})

setupListeners(store.dispatch)
