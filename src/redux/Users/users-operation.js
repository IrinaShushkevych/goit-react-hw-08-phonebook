import { createAsyncThunk } from '@reduxjs/toolkit'

import { registerUserAPI } from '../../utilits/api'

export const registerUser = createAsyncThunk('register', async (user) => {
  const data = await registerUserAPI(user)
  console.log(data)
  return data
})
