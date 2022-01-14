import { createSlice } from '@reduxjs/toolkit'
import { registerUser } from './users-operation'
import { current } from 'immer'

console.log([registerUser.pending])

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    name: '',
    email: '',
    token: '',
    error: '',
    isLoading: false,
  },
  extraReducers: {
    [registerUser.pending]: (state, action) => {
      console.log('PENDING....')
      console.log(action)
      console.log(current(state))
      state.isLoading = true
      state.error = ''
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      console.log('FULFILD')
      console.log(payload)
      if (payload?.code === 11000) {
        state.error = `${payload.keyValue.email} is already exists`
        state.isLoading = false
      } else {
        state.token = payload.token
        state.name = payload.user.name
        state.email = payload.user.email
        state.error = ''
        state.isLoading = false
      }
    },
    [registerUser.rejected]: (state, { error }) => {
      console.log('ERROR')
      console.log(error)
    },
  },
})
