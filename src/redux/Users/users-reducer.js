import { createReducer } from '@reduxjs/toolkit'
import { registerUser, loginUser, logoutUser } from './users-operation'
import { current } from 'immer'

console.log([registerUser.pending])
const initialState = {
  name: '',
  email: '',
  token: '',
  error: '',
  isLoading: false,
}

export const usersReducer = createReducer(initialState, {
  [registerUser.pending]: (state, action) => {
    state.isLoading = true
    state.error = ''
  },
  [registerUser.fulfilled]: (state, { payload }) => {
    state.token = payload.token
    state.name = payload.user.name
    state.email = payload.user.email
    state.error = ''
    state.isLoading = false
  },
  [registerUser.rejected]: (state, { error }) => {
    state.error = error.message
    state.isLoading = false
  },
  [loginUser.pending]: (state, action) => {
    state.isLoading = true
    state.error = ''
  },
  [loginUser.fulfilled]: (state, { payload }) => {
    state.token = payload.token
    state.name = payload.user.name
    state.email = payload.user.email
    state.error = ''
    state.isLoading = false
  },
  [loginUser.rejected]: (state, { error }) => {
    state.error = error.message
    state.isLoading = false
  },
  [logoutUser.pending]: (state, action) => {
    state.isLoading = true
    state.error = ''
  },
  [logoutUser.fulfilled]: (state, { payload }) => {
    state.token = ''
    state.name = ''
    state.email = ''
    state.error = ''
    state.isLoading = false
  },
  [logoutUser.rejected]: (state, { error }) => {
    state.error = error.message
    state.isLoading = false
  },
})
