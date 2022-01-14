import { createSlice } from '@reduxjs/toolkit'
import { registerUser } from './users-operation'

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    name: '',
    email: '',
    token: '',
  },
  reducer: {
    [registerUser.fulfilled]: (state, { payload }) => {
      console.log(payload)
      state.user.token = payload.token
      state.user.name = payload.user.name
      state.user.email = payload.user.email
    },
  },
})
