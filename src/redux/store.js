import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { persistStore, persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
import logger from 'redux-logger'
import { contactsReducer } from './Contacts/contacts-reducer'
import { filterReducer } from './Filter/filter-reducer'
import { usersReducer } from './Users/users-reducer'

const middleware = (getDefaultMiddleware) => [
  ...getDefaultMiddleware(),
  contactsReducer.middleware,
  process.env.NODE_ENV !== 'production' && logger,
]

const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: ['token', 'name', 'email'],
}

const persistedUserReducer = persistReducer(persistConfig, usersReducer)

export const store = configureStore({
  reducer: {
    users: persistedUserReducer,
    [contactsReducer.reducerPath]: contactsReducer.reducer,
    filter: filterReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
})

setupListeners(store.dispatch)

export const persistedStore = persistStore(store)
