import { createReducer } from '@reduxjs/toolkit'
import { registerUser, loginUser } from './users-operation'
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
    console.log('REGISTER PENDING....')
    console.log(action)
    console.log(current(state))
    state.isLoading = true
    state.error = ''
  },
  [registerUser.fulfilled]: (state, { payload }) => {
    console.log('REGISTER FULFILD')
    console.log(payload)
    // if (
    //   payload?.code === 400 ||
    //   payload?.code === 404 ||
    //   payload?.code === 500
    // ) {
    //   state.error = payload.error
    //   state.isLoading = false
    // } else {
    state.token = payload.token
    state.name = payload.user.name
    state.email = payload.user.email
    state.error = ''
    state.isLoading = false
    // }
  },
  [registerUser.rejected]: (state, { error }) => {
    console.log('REGISTER ERROR')
    console.log(error)
    state.error = error.message
    state.isLoading = false
  },
  [loginUser.pending]: (state, action) => {
    console.log('LOGIN PENDING....')
    console.log(action)
    console.log(current(state))
    state.isLoading = true
    state.error = ''
  },
  [loginUser.fulfilled]: (state, { payload }) => {
    console.log('LOGIN  FULFILD')
    console.log(payload)
    // if (payload?.code === 400 || payload?.code === 404) {
    //   state.error = payload.error
    //   state.isLoading = false
    // } else {
    state.token = payload.token
    state.name = payload.user.name
    state.email = payload.user.email
    state.error = ''
    state.isLoading = false
    // }
  },
  [loginUser.rejected]: (state, { error }) => {
    console.log('LOGIN ERROR')
    console.log(error)
    state.error = error.message
    state.isLoading = false
  },
})
