//created by Irina Shushkevych
import { createSlice } from '@reduxjs/toolkit'
import { usersReducer } from '../Users/users-reducer'

export const authSlice = createSlice({
  name: 'auth',
  initialState: { token: null, user: null },
  extraReducers: (builder) => {
    builder.addMatcher(
      usersReducer.endpoints.registerUser.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token
        state.user = payload.user
      },
    )
    builder.addMatcher(
      usersReducer.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token
        state.user = payload.user
      },
    )
    builder.addMatcher(
      usersReducer.endpoints.logoutUser.matchFulfilled,
      (state) => {
        state.token = null
        state.user = null
      },
    )
  },
})
