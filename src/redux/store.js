//created by Irina Shushkevych
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import logger from "redux-logger";
import { contactsReducer } from "./Contacts/contacts-api";
import { filterReducer } from "./Filter/filter-reducer";
import { usersReducer } from "./Users/users-api";
import { authSlice } from "./Auth/auth-slice";
import { groupsReducer } from "./Groups/groups-api";

const middleware = (getDefaultMiddleware) => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  contactsReducer.middleware,
  usersReducer.middleware,
  groupsReducer.middleware,
  // process.env.NODE_ENV !== 'production' && logger,
];

const persistConfig = {
  key: "auth",
  storage: storageSession,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer);

export const store = configureStore({
  reducer: {
    [usersReducer.reducerPath]: usersReducer.reducer,
    [contactsReducer.reducerPath]: contactsReducer.reducer,
    [authSlice.name]: persistedAuthReducer,
    [groupsReducer.reducerPath]: groupsReducer.reducer,
    filter: filterReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

setupListeners(store.dispatch);

export const persistedStore = persistStore(store);
