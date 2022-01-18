import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
import logger from 'redux-logger'
import { contactsReducer } from './Contacts/contacts-reducer'
import { filterReducer } from './Filter/filter-reducer'
import { usersReducer } from './Users/users-reducer'
import { authSlice } from './Auth/auth-slice'

const middleware = (getDefaultMiddleware) => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  contactsReducer.middleware,
  usersReducer.middleware,
  process.env.NODE_ENV !== 'production' && logger,
]

const persistConfig = {
  key: 'root',
  storage: storageSession,
}

const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer)

export const store = configureStore({
  reducer: {
    [usersReducer.reducerPath]: usersReducer.reducer,
    [contactsReducer.reducerPath]: contactsReducer.reducer,
    [authSlice.name]: persistedAuthReducer,
    filter: filterReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
})

setupListeners(store.dispatch)

export const persistedStore = persistStore(store)
