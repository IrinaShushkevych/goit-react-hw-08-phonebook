import { createAsyncThunk } from '@reduxjs/toolkit'

import { registerUserAPI, loginUserAPI } from '../../utilits/api'

export const registerUser = createAsyncThunk('register', async (user) => {
  const data = await registerUserAPI(user)
  console.log('Register operation')
  console.log(data)
  return data
})

export const loginUser = createAsyncThunk('login', async (user) => {
  const data = await loginUserAPI(user)
  console.log('Login operation')
  console.log(data)
  return data
})
